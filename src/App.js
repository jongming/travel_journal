import React from "react";
import Nav from "./components/nav"
import Location from "./components/location"
import Data from "./components/location_data";

function App() {
  const elements = Data.map(element => {
    return (
      <Location 
      key={element.id}
      {...element}
      />
    )
  })

  return (
    <div className="App">
      <Nav />
      <locations className="Locations">{elements}</locations> 
    </div>
  );
}

export default App;
