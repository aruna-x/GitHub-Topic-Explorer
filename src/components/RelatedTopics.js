// Libraries
import { gql, useQuery } from "@apollo/client";

// Components, Modules, Styles
import { RelatedLink } from "../style/global";

function RelatedTopics({ topic, setTopic, setBreadcrumbs, generateKey }) {
  // Apollo / GraphQL query
  const QUERY = gql`
    query ($topic: String!) {
      topic(name: $topic) {
        stargazerCount
        relatedTopics(first: 10) {
          name
          stargazers {
            totalCount
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(QUERY, {
    variables: { topic: topic },
  });

  if (loading) console.log("Loading...");
  if (error) console.error(error);

  // when relatedTopic is clicked: add it to breadcrumbs & set new topic
  function relatedClick(relatedTopic) {
    setBreadcrumbs((b) => [...b, relatedTopic]);
    setTopic(relatedTopic);
  }

  // maps the related topics from query data to react-friendly list for display
  const RenderRelated = (topic, i) => {
    return (
      <p key={generateKey(i)}>
        <RelatedLink onClick={() => relatedClick(topic.name)} key={topic.name}>
          {topic.name}
        </RelatedLink>
        ({topic.stargazers.totalCount})
      </p>
    );
  };

  const RelatedTopicsList = () => {
    return(
      <section>
        {data.topic.relatedTopics.map(RenderRelated)}
      </section>
    )  
  }

  // ternary here prevents app-breaking error on first render with no data
  return data ? <RelatedTopicsList /> : <></>;
}

export default RelatedTopics;
