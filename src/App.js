import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import NoteState from "./context/notes/NoteState";
import { Alert } from "./components/Alert";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert message="I will set it later"/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/Signup" element={<Signup/>} />
              <Route exact path="/Login" element={<Login/>} />
            </Routes>
          </div>
        </BrowserRouter>
    </NoteState>
  );
}

export default App;
