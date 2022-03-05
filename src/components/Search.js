// Libraries
import { useState } from "react";
import { useDispatch } from 'react-redux';

// Components, Modules, Styles
import { Input, Button } from "../style/search";

function Search() {
  // state
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  // when user types in search field: update state
  function handleChange(e) {
    setSearch(e.target.value);
  }

  // on submit: set new topic & reset search field + breadbrumbs
  function handleSearch(e) {
    e.preventDefault();
    dispatch({type: "SET_TOPIC", payload: search})
    // setTopic(search);
    setSearch("");
    // setBreadbrumbs([]);
    dispatch({type: "RESET_BREADCRUMBS"});
  }

  return (
    <form onSubmit={handleSearch}>
      <Input onChange={handleChange} value={search} />
      <Button type="submit">
        Submit
      </Button>
    </form>
  );
}

export default Search;
