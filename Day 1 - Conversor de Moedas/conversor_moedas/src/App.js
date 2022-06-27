import React, { Component } from "react";
import "./App.css";
import Conversor from "./components/Conversor";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Conversor de Moedas</h1>
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="USD"></Conversor>
        <footer>Daniel Oliveira 💙 2022 &copy; </footer>
      </div>
    );
  }
}

export default App;
