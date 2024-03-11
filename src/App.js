import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alerts from "./components/Alerts";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-secondary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-info')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#011515";
      showAlert(" Dark mode has been enabled", "success");
      
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert(" Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
    <Router>
      
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />

      <div className="container my-3">
        
          <Routes>
          <Route exact path="/"
              element={<Textform showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} />}
          />
          <Route exact path="/about"  element={<About mode={mode}/>} />
          </Routes>
       
      </div>
      
      </Router>
    </>
  );
}

export default App;