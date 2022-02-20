// Libraries
import { useState } from 'react';
import styled from 'styled-components';

// Components & Modules
import RelatedTopics from './RelatedTopics'

function App() {

  const [topic, setTopic] = useState('react');
  const [search, setSearch] = useState('');
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  console.log(breadcrumbs)

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleSearch() {
    setBreadcrumbs([]);

    // Setting topic will cause RelatedTopics to rerender with new data
    setTopic(search);
  }

  function breadcrumbClick(index) {
    const newTopic = breadcrumbs[index];
    setBreadcrumbs(b => b.slice(0,index+1));
    setTopic(newTopic);
  }

  return (
    <PageStyle>
      <H1>GitHub Topic Explorer</H1>
      <Input onChange={handleChange} value={search}/>
      <Button type="submit" onClick={handleSearch}>Submit</Button>
      <Breadwrapper> {breadcrumbs.map((b, i) => <><RelatedLink onClick={()=>breadcrumbClick(i)}>{b}</RelatedLink> > </>)} </Breadwrapper>
      <H2>{topic.toUpperCase()}</H2>
      <RelatedTopics topic={topic} setTopic={setTopic} setBreadcrumbs={setBreadcrumbs}/>
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

const RelatedLink = styled.span`
  color: blue;
  text-decoration: underline;

  &:hover {
      cursor: pointer;
  }
`

const Breadwrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`