import './App.css';
import {groups} from './db';
import {Link} from "react-router-dom";

//knapp på startsidan
function KnappProg(props) {
    
  return (
    <Link class="removeUnderline" to={"/info/"+props.link}>
        <div className="KnappProg">
            <div style={{backgroundColor:props.color}} className="button_color"></div>
            <p>{props.titel}</p>
        </div>
    </Link>
  );
}

export default KnappProg;