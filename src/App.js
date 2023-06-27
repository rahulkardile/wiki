import React from "react";
import Card from "./components/Card";
import emojipedia from "./components/Emojipedia";

let createCard = function (emojipedia) {
  console.log(emojipedia.meaning.substring(0, 100))
  return (
    <Card
    key={emojipedia.id}
      emoji= {emojipedia.emoji}
      name= {emojipedia.name}
      meaning= {emojipedia.meaning}
    />
    
  )
}

function App() {

  console.log("hey");
  

  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
      {emojipedia.map(createCard)}
      </dl>
    </div>
  );
}

export default App;
