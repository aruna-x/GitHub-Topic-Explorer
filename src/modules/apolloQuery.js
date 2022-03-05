// Libraries
import { gql } from "@apollo/client";

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

export { QUERY };