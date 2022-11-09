import './App.css';
import {groups} from './db';
import {Link} from "react-router-dom";
import { useState } from "react";

//Språkknapp som ändrar språk
function Flagga(props) {
    //root rendering??
    const [lang, setLanguage] = useState("");
    
    function changeLanguage (bool) {
       if(bool === true){
        bool = false
        
       }      
       else {
        bool = true
        return bool
        }
      }

  return (
    
        <button className="Flagga" onClick={changeLanguage(lang)}></button>
  
  );
}

export default Flagga;
