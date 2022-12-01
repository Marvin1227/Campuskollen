import './App.css';
import {groups} from './db';
import {Link, useNavigate} from "react-router-dom";
import {lang} from './Flagga';


//tillbakaknapp
function TillbakaKnapp(props) {

    let Navigate = useNavigate();
    return (
        <button onClick={() => Navigate(-1)}><img className="backarrow" src="/img/backarrow.png"/></button>
    );
}
export default TillbakaKnapp;