import './App.css';
import {groups} from './db';
import {Link, useNavigate} from "react-router-dom";
import {lang} from './Flagga';


//tillbakaknapp
function TillbakaKnapp(props) {
        
    var buttonText = "< Tillbaka";

    if(lang == "SW"){
        buttonText = "< Tillbaka";

    }else if (lang == "EN") {
        buttonText = "< Back";

    }

    let Navigate = useNavigate();
    return (
        
            <button onClick={() => Navigate(-1)}>{buttonText}</button>
        
    );
}
export default TillbakaKnapp;