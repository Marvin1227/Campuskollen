import './App.css';
import {groups} from './db';
import {Link} from "react-router-dom";

//knapp på startsidan
function Knapp(props) {
    
  return (
    <Link class="removeUnderline" to={"/"+props.link}>
        <div className="Knapp">
            <p>{props.titel}</p>
        </div>
    </Link>
  );
}

export default Knapp;
