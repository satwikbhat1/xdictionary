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

  // Handle search button click
  const handleSearch = () => {
    const foundItem = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.trim().toLowerCase()
    );

    if (foundItem) {
      setResult(foundItem.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          placeholder="Enter a word"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleSearch}
          style={{
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Search
        </button>
      </div>
      <p style={{ fontWeight: "700", fontSize: "15px" }}>Definiton:</p>
      <div
        style={{
          marginTop: "20px",
          padding: "10px",
        }}
      >
        {result}
      </div>
    </div>
  );
};

export default XDictionary;
