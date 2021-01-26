import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Main } from "./components/main-content/Main";

export const App = () => {
  return (
    <div className="App container">
      <Header />
      <Main />
    </div>
  );
};
