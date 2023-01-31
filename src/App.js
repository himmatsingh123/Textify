import './App.css';
import NavBar from './components/NavBar';
import PropTypes from 'prop-types';
import TextForm from './components/TextForm';
import {useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
      const[mode,setMode] = useState('light');
      const[alert,setAlert] = useState(null);
      const showAlert = (message,type)=>{ 
         setAlert({
             msg:message,
             type:type
           })
           setTimeout(()=>{ setAlert(null)},1500);      }
       const togglemode = ()=>{
        if(mode === 'light'){
          setMode('dark');
          document.body.style.backgroundColor = '#042743';
          showAlert('Dark Mode Enabled','success');
          }
        else{
          setMode('light');
          document.body.style.backgroundColor = 'white';
          showAlert('Light Mode Enabled','success');
         
        }
       }
  return (
      <>
      <Router>
     <NavBar  Mode={mode} toggleMode={togglemode}/>
     <Alert alert= {alert} />
     <Routes>
          <Route exact path="/About" element={<About/>} />
          <Route  exact path="/" element={<TextForm  showAlert={showAlert} heading="Enter the text to analyize below :"  Mode={mode}/>} />
     </Routes>
        </Router>
   </>
   
  );
}
  
export default App;

NavBar.prototype = {title:PropTypes.string, index:PropTypes.string, about: PropTypes.string};
NavBar.defaultProps = {title:"Textify", index: "Home", about: "About"};
