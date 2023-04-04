import React from "react";
import "./App.css"

//React router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//componentes
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import CardList from "./Components/CardList/CardList";

//Pages
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import UserDetail from "./pages/UserDetail/UserDetail"

const App = () => {
    return (
      <Router>
        <div className="App">  
        
        <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/user-detail/:id" element={<UserDetail />} />
            </Routes>

            <Header />

            <CardList />

        </div>
    </Router>
    );
}

export default App;