import './App.css';
import {groups} from './db';
import {Link} from "react-router-dom";

//knapp på startsidan
function KnappProg(props) {
    
  return (
    <Link to={"/info/"+props.link}>
        <div className="KnappProg">
            <div style={{backgroundColor:props.color}} className="button_color"><div style={{backgroundColor:props.color2}} className="button_color2"/></div>
            <h3 className="relatedName">{props.titel}</h3>
        </div>
    </Link>
  );
}

export default KnappProg;