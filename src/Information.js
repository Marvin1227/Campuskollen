import './App.css';
import {groups} from './db';
import Knapp from './Knapp';
import KnappProg from './KnappProg';
import Searchbar from './searchbar';
import TillbakaKnapp from './TillbakaKnapp';
import {Link, useParams} from "react-router-dom";
import App from './App';

//Sidan med alla föreningar av en typ, landar här från de fyra stora knapparna på startsidan
//Program, Föreningar, Festerier, Phadderier
function Information() {

    let {code} = useParams(); //hämtning av föreningens kod från url

    let foundGroup = groups.find(group => group.code === code); //hitta föreningen med rätt kod i databasen

    let connected = [];
    for(let i=0; i<foundGroup.connections.length; i++){
        connected.push(groups.find(group => group.code === foundGroup.connections[i])); //skapar array med alla kopplade föreningar
    }
    let lang = "SW";

    return (
        <div className="Home">
            <div className ="header">
                <h1><TillbakaKnapp/> <Link to={"/"}> Campuskollen</Link></h1>
            </div>
            <span className="Name">{eval("foundGroup.name"+lang)}</span><br/>
            {eval("foundGroup.desc"+lang)}<br/>
            Tillhör:<br/>
            {connected.map((group) => (<div className="dropdown-row"> {<KnappProg titel={eval("group.name"+lang)} link={group.code} color={group.color} color2={group.color2}/>}</div>))}
        </div>
        
    );
  }

  export default Information;