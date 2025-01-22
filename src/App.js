import React, { useState } from "react";

const XDictionary = () => {
  // Initialize dictionary state
  const [dictionary] = useState([
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setResult("Word not found in the dictionary.");
      return;
    }

    const foundItem = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.trim().toLowerCase()
    );

    setResult(
      foundItem ? foundItem.meaning : "Word not found in the dictionary."
    );
  };

  return (
    <div>
      <h1>XDictionary</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a word"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <strong>Definition:</strong>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default XDictionary;
