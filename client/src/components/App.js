// import logo from '../logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import { AppContext } from "../contexts/AppContext";

function App() {
  return (
    <div className="App">
      <AppContext.Provider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
