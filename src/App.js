import React, {Component} from "react";
import JokeList from "./JokeList";

/*function App() {
  return (
    <div className="App">
      <JokeList />
    </div>
  );
}*/

//using class components

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <JokeList />
      </div>
    );
  }
}

export default App;
