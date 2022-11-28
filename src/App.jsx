import React from "react";
import Groups from "./components/Groups/Groups";
import Header from "./components/Header/Header";
import Matches from "./components/Matches/Matches";
import Title from "./components/Title/Title";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Title />
      <Groups />
      <Matches />
      <h3 style={{ textAlign: "center", margin: "1rem" }}>
        Code Source :
        <a
          href="https://github.com/monsef1234/worldCup22"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here
        </a>
      </h3>
    </div>
  );
};

export default App;
