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
    </div>
  );
};

export default App;
