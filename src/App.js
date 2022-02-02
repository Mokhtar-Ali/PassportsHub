import React from "react";
import "./App.css";
import Headlines from "./components/Headlines";
import Blogs from "./components/Blogs";
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <Headlines />
      <Container />
      {/* <Blogs /> */}
      {/* <div style={{display: 'flex',backgroundColor: 'black'}}>
        <p style={{color:'white', padding:'10px'}}>&copy; 2020 PassportsHub.website</p>
        <div style={{flex:'1'}}></div>
        <p style={{color:'white',padding:'10px'}}>Created by: <a href='https://mokhtarali.dev/' target='_blank'>Mokhtar Ali</a></p>
        </div> */}
    </div>
  );
}

export default App;
