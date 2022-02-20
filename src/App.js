// Libraries
import { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';

function App() {

  const [topic, setTopic] = useState('react');
  const [search, setSearch] = useState('');
  
  // IN REACT COMPONENT ...
  const QUERY = gql`
    query ($topic: ${topic}){
      topic(name: $topic) {
        stargazerCount
        relatedTopics(first: 10) {
          name
          stargazers {
            totalCount
          }
        }
      }
    }`

  const { loading, error, data } = useQuery(QUERY);

  if (loading) console.log("Loading...");
  if (error) console.error(error);
  

  console.log(data);


  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleSubmit() {
    // graphQL query using Apollo to get all related + # stargazers for each topic
    setTopic(search);
  }

  function relatedClick(e) {
    // add link to breadcrumb and invoke handleSubmit
    setTopic(e.target.value)
  }

  function breadcrumbClick(e) {
    // remove any 
    // later stuff from breadcrumb list and make the clicked the search item)
    setTopic(e.target.value)
  }

  return (
    <PageStyle>
      <H1>GitHub Topic Explorer</H1>
      <Input onChange={handleChange} value={search}/>
      <Button type="submit" onClick={handleSubmit}>Submit</Button>
      {/* breadcrumbs here */}
      <H2>{topic.toUpperCase()}</H2>
      <RelatedTopics data={data.relatedTopics}/>
      {/* topic (# stargazers) */}
      {/* in a flex-wrap element with space between */}
    </PageStyle>
  );
}

export default App;

const PageStyle = styled.div`
  margin: 100px auto;
  text-align: center;
  padding: 50px;
  max-width: 550px;
  min-height: 500px;
  border: 1px solid black;
`

const H1 = styled.h1`
`

const H2 = styled.h2`
`

const Input = styled.input`
  margin-right: 10px;
  padding: 5px;
`

const Button = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
`
