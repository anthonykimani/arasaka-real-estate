// import logo from '../logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Property from "../pages/Property";
import Purchase from "../pages/Purchase";
import { AppContext } from "../contexts/AppContext";

function App() {

  const [ user, setUser ] = useState({
    first_name:null,
    last_name:null,
    email:null,
    password:null,
  });
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  return (
    <div className="App">
      <AppContext.Provider value={{user, setUser, isLoggedIn, setIsLoggedIn}}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/property" element={<Property />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
