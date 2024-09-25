import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] =  useState('light'); //Whether dark mode is enabled or not
  const [alert, setAlert] =  useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  //DISPLAY COLOR PALLETE
  // const removeBodyClass = () =>{
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-success');
  // }

    //const toggleMode = (cls) =>{
    //removeBodyClass();
    //document.body.classList.add('bg-' + cls);
    //}

  const toggleMode = () =>{
      if (mode === 'light')
      {
        setMode('dark');
        document.body.style.backgroundColor='#113a65';
        document.body.style.color='white';
        showAlert("Dark mode has been enabled", "success");
      }
      else
      {
        setMode('light');
        document.body.style.backgroundColor='white';
        document.body.style.color='black';
        showAlert("Light mode has been enabled", "success");
      }
  }
  return (
     <>
      <BrowserRouter> {/* Compulsory Required */}
      {/*Whatever components is outside <Routes> tag will not change after routing*/}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          {/*Whatever components is inside <Routes> tag will change after routing*/}
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/>
          <Route path="/about" element={<About mode={mode} toggleMode={toggleMode}/>}/>
        </Routes>
      </div>
      </BrowserRouter>
     </>
  );
}

export default App;
