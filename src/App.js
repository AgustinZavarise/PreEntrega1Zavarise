import React from "react";
import "./App.css"

//React router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//componentes
import Header from "./Components/Header/Header";


import ResponsiveNavigation from "./Components/ResponsiveNavigation/ResponsiveNavigation";

//COntext
import { ItemsProvider } from "./Components/Context/ItemsContext";

//Pages
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Shop from "./pages/shop/shop"
import InstumentDetail from "./pages/InstrumentDetail/InstumentDetail";
import DetailVoces from "./pages/detailVoces/detailVoces";

const App = () => {
    return (
      <Router>
        <ItemsProvider>
          <div className="App">  
          <Header />
          <ResponsiveNavigation />
        
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/Shop" element={<Shop />} />
              <Route path="/details/:id" element={<InstumentDetail />} />
              <Route path="/detailVoces/:voces" element={<DetailVoces />} />
            </Routes>
        </div>
        </ItemsProvider>
      </Router>
    );
}

export default App;