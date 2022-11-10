import './App.css';
import {groups} from './db';
import Knapp from './Knapp';
import KnappProg from './KnappProg';
import Searchbar from './searchbar';
import {Link, useParams} from "react-router-dom";

//Sidan med alla föreningar av en typ, landar här från de fyra stora knapparna på startsidan
//Program, Föreningar, Festerier, Phadderier
function Information() {

    let {code} = useParams(); //hämtning av föreningens kod från url

    let foundGroup = groups.find(group => group.code === code); //hitta föreningen med rätt kod i databasen

    let connected = [];
    for(let i=0; i<foundGroup.connections.length; i++){
        connected.push(groups.find(group => group.code === foundGroup.connections[i])); //skapar array med alla kopplade föreningar
    }
    

    return (
        <div className="Home">
            <span className="Name">{foundGroup.nameSW}</span><br/>
            {foundGroup.descSW}<br/>
            Tillhör:<br/>
            {connected.map((group) => (<div className="dropdown-row"> {<KnappProg titel={group.nameSW} link={group.code} color={group.color}/>}</div>))}
        </div>
        
    );
  }

  export default Information;