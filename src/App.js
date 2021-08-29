import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React,{useState} from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
/* import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; */

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert('Dark mode is enabled','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light mode is enabled','success');
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/> 
    <Alert alert={alert} />
    <div className="container my-3">
    {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
         {/*  </Route>
        </Switch> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
