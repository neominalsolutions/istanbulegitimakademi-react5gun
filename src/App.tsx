import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserForm from "./forms/UserForm";
import UserFormReactForms from "./forms/UserFormReactForms";

function App() {
  return (
    <div className="App">
      {/* <UserForm /> */}
      <UserFormReactForms />
    </div>
  );
}

export default App;
