import React from "react";

function Food({favourite}){
  return <h1> I like {favourite}</h1>;
}


function App() {
  return (
    <div>
     <h1>Hello !</h1>
     <Food favourite="rice" />
     <Food favourite="kimchi" />
     <Food favourite="kim" />
    </div>

  );
}

export default App;

