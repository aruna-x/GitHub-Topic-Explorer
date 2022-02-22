// Libraries
import { useState } from "react";

// Components, Modules, Styles
import { Input, Button } from "../style/search";

function Search({ setTopic, setBreadbrumbs }) {
  // state
  const [search, setSearch] = useState("");

  // when user types in search field: update state
  function handleChange(e) {
    setSearch(e.target.value);
  }

  // on submit: set new topic & reset search field + breadbrumbs
  function handleSearch() {
    setTopic(search);
    setSearch("");
    setBreadbrumbs([]);
  }

  return (
    <>
      <Input onChange={handleChange} value={search} />
      <Button type="submit" onClick={handleSearch}>
        Submit
      </Button>
    </>
  );
}

export default Search;
