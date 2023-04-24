import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
// import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom"

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

   const showAlert = (message, type) => {
    setAlert({
      msg: message,  
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    }, 1500)
  }

  
  // const removeColor = () =>{
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');
  //   // document.body.classList.remove('bg-dark');
  // }

  // const coloring = (cls) => {
  //   removeColor();
  //   document.body.classList.add("bg-"+cls)
  //   if(mode === "light"){
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#808080";
  //     showAlert("Dark mode has enabled", "success");
  //   }
  //   else{
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light mode has enabled", "success");
  //   }
  // }

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#808080";
      showAlert("Dark mode has enabled", "success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has enabled", "success");
    }
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    {/* <Routes> */}
      {/* <Route path='/' element={<TextForm mode={mode} showAlert={showAlert} heading="Enter the text to analyze below"/>}></Route> */}
      {/* <Route path='/about' element={<About mode={mode} showAlert={showAlert} />}></Route> */}
      <TextForm mode={mode} showAlert={showAlert} heading="Enter the text to analyze below"/>
    {/* </Routes> */}
    {/* </Router> */}
    </>
  );
}

export default App;
