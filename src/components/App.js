// Libraries
import { useState } from "react";

// Components, Modules, Styles
import Search from "./Search";
import Breadcrumbs from "./Breadcrumbs";
import RelatedTopics from "./RelatedTopics";
import { PageStyle } from "../style/app";

function App() {
  // state
  const [topic, setTopic] = useState("react");
  const [breadcrumbs, setBreadbrumbs] = useState([]);

  // generates unique keys for lists
  function generateKey(i) {
    return `${i}_${new Date().getTime()}`;
  }

  return (
    <PageStyle>
      <h1>GitHub Topic Explorer</h1>
      <Search setTopic={setTopic} setBreadbrumbs={setBreadbrumbs} />
      <Breadcrumbs
        setTopic={setTopic}
        breadcrumbs={breadcrumbs}
        setBreadbrumbs={setBreadbrumbs}
        generateKey={generateKey}
      />
      <h2>{topic.toUpperCase()}</h2>
      <RelatedTopics
        topic={topic}
        setTopic={setTopic}
        setBreadcrumbs={setBreadbrumbs}
        generateKey={generateKey}
      />
    </PageStyle>
  );
}

export default App;
