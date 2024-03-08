import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alerts from "./components/Alerts";


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

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#011515";
      showAlert(" Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";

      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode "
      // },2500);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now "
      // },1500);
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert(" Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
    
    
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
    <Alerts alert={alert} />
    <div className="container my-3">
       {/* /users --> Component 1
            /users/home --> Component 2 */}
    <Textform
                showAlert={showAlert}
                heading="Enter the Text to Analyze Below"
                mode={mode}
            />
    </div>
     
      
    </>
  );
}

export default App;
