import './App.css';
import {groups} from './db';
import {Link} from "react-router-dom";

//knapp på startsidan
function Knapp(props) {
    
  return (
    <Link to={"/"+props.link}>
        <div className="knapp">
            <h2>{props.titel}</h2>
        </div>
    </Link>
  );
}

export default Knapp;
