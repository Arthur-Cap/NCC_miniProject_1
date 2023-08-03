import "./App.css";
import Brief from "./component/brief/brief";
import Detail from "./component/detail/detail";
import { useState } from "react";


function App() {

  return (
    <div className="App">  
      <Brief></Brief>
      <Detail ></Detail>
    </div>
  );
}


export default App;
