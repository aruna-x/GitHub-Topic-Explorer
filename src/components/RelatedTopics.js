// Libraries
import { useQuery } from "@apollo/client";
import { useSelector, useDispatch } from 'react-redux';

// Components, Modules, Styles
import { QUERY } from "../modules/apolloQuery";
import { RelatedLink } from "../style/global";

function RelatedTopics({ generateKey }) {
  // state
  const dispatch = useDispatch();
  const topic = useSelector(s => s.topic);

  const { loading, error, data } = useQuery(QUERY, {
    variables: { topic: topic },
  });

  if (loading) console.log("Loading...");
  if (error) console.error(error);

  // when relatedTopic is clicked: add it to breadcrumbs & set new topic
  function relatedClick(relatedTopic) {
    dispatch({type: "ADD_BREADCRUMB", payload: relatedTopic});
    dispatch({type: "SET_TOPIC", payload: relatedTopic})
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
