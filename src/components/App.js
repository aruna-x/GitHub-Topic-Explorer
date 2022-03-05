// Libraries
import { useSelector } from 'react-redux';

// Components, Modules, Styles
import Search from "./Search";
import Breadcrumbs from "./Breadcrumbs";
import RelatedTopics from "./RelatedTopics";
import { PageStyle } from "../style/app.style";

function App() {
  // state
  const topic = useSelector(s => s.topic);

  // generates unique keys for lists
  function generateKey(i) {
    return `${i}_${new Date().getTime()}`;
  }

  return (
    <PageStyle>
      <h1>GitHub Topic Explorer</h1>

      <Search />
      <Breadcrumbs generateKey={generateKey} />

      <h2>{topic ? topic.toUpperCase() : ""}</h2>
      <RelatedTopics generateKey={generateKey} />
    </PageStyle>
  );
}

export default App;
