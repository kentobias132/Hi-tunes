import React, { useState } from "react";
import Button from "./Button";

function SearchBar({ onSearch }) {
  const [terms, setTerms] = useState("");

  const passTerms = () => {
    onSearch(terms);
  };

  const handleChange = ({ target }) => {
    setTerms(target.value);
  };

  return (
    <div className=" mt-9  ">
      <div>
        <input
          className="outline-none p-2 rounded border pa border-sky-400"
          type="text"
          name="search"
          placeholder="Search your favourite music"
          onChange={handleChange}
        />
      </div>
      <div className="my-9 flex justify-center">
        <Button text={"Search"} clickHandler={passTerms} />
      </div>
    </div>
  );
}

export default SearchBar;
