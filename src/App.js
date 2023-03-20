import React, { Component } from "react";
import "./App.css"

//componentes
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import CardUser from "./Components/CardUser/CardUser";



class App extends Component {
  render() {
    return(
      <div className="App">
        <NavBar />
        <Header />
        <div className="UserSection">
          <CardUser 
          modelo= "Mopho x4" 
          precio={450000} 
          img= "https://i.pinimg.com/564x/7c/3e/86/7c3e86770f892ae9a868c6d4989303b8.jpg"
          backgroundColor= "whiteSmoke"
          />
          <CardUser 
          modelo= "Moog Mother 32" 
          precio={438000} 
          img= "https://i.pinimg.com/564x/4e/35/4f/4e354f7f4d863f9087cc00b95fa00bc4.jpg"
          backgroundColor= "whiteSmoke"
          />
          <CardUser 
          modelo= "Korg Ms20 mini" 
          precio= {350000} 
          img= "https://i.pinimg.com/564x/6a/59/a4/6a59a4c5067fecec36beb23f347433e2.jpg"
          backgroundColor= "whiteSmoke"
          />
          <CardUser 
          modelo= "Arturia Minibrute 2s" 
          precio={310000} 
          img= "https://i.pinimg.com/564x/a3/38/59/a33859fbe7a78a702990d5b05f9f442b.jpg"
          backgroundColor= "whiteSmoke"
          />
          
        </div>

      </div>
      
    )
  }
}

export default App;