import './App.css';
import {groups} from './db';
import Knapp from './Knapp';
import KnappProg from './KnappProg';
import Searchbar from './searchbar';
import {Link, useParams} from "react-router-dom";

//Sidan med alla föreningar av en typ, landar här från de fyra stora knapparna på startsidan
//Program, Föreningar, Festerier, Phadderier
function Information() {

    const all = groups;

    let {code} = useParams();

    let foundGroup = groups.find(group => group.code === code);

    let connected = [];
    for(let i=0; i<foundGroup.connections.length; i++){
        connected.push(groups.find(group => group.code === foundGroup.connections[i]));
    }
    

    return (
        <div className="Home">
            {foundGroup.nameSW}
            {foundGroup.descSW}
            Tillhör:
            {connected.map((group) => (<div className="dropdown-row"> {<KnappProg titel={group.nameSW} link={group.code} color={group.color}/>}</div>))}
        </div>
        
    );
  }

  export default Information;