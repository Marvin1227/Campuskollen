import './App.css';
import {groups} from './db';
import {Link, useNavigate} from "react-router-dom";


//tillbakaknapp
function TillbakaKnapp(props) {
        
    let Navigate = useNavigate();
    return (
        
            <button onClick={() => Navigate(-1)}>tillbaka</button>
        
    );
}
export default TillbakaKnapp;