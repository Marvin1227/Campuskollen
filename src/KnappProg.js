import './App.css';
import {groups} from './db';
import {Link} from "react-router-dom";

//knapp på startsidan
function KnappProg(props) {
    
  return (
    //<Link to={props.link}>
        <div className="KnappProg">
            <p>{props.titel}</p>
        </div>
    //</Link>
  );
}

export default KnappProg;