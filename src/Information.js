import './App.css';
import { groups } from './db';
import Knapp from './Knapp';
import KnappProg from './KnappProg';
import Searchbar from './searchbar';
import TillbakaKnapp from './TillbakaKnapp';
import { Link, useParams } from "react-router-dom";
import App from './App';
import Flagga from './Flagga';
import { lang } from './Flagga';
import { useContext } from "react";
import { LangContext } from "./App"

//Sidan med alla föreningar av en typ, landar här från de fyra stora knapparna på startsidan
//Program, Föreningar, Festerier, Phadderier
function Information({ onLang }) {

    const lang = useContext(LangContext);

    let { code } = useParams(); //hämtning av föreningens kod från url

    let foundGroup = groups.find(group => group.code === code); //hitta föreningen med rätt kod i databasen

    let connected = [];
    for (let i = 0; i < foundGroup.connections.length; i++) {
        connected.push(groups.find(group => group.code === foundGroup.connections[i])); //skapar array med alla kopplade föreningar
    }
    let clothe_desc = "";
    let relate_title = "";
    if(lang==="SW"){
        clothe_desc = "Känns igen som:";
        relate_title = "Relaterat:";
    }
    else{
        clothe_desc = "Recognized as:";
        relate_title = "Related:";
    }

    console.log(lang);
    return (
        <div className="home">
            <div className="header">
                <TillbakaKnapp />
                <h1><Link to={"/"}><img className="campuskollenlogo" src={"/img/logga6-small.png"} /></Link></h1>
                <div className="change_lang">{<Flagga onLang={onLang} />}</div>
            </div>
            <h2 className="pageName">{eval("foundGroup.name" + lang)}</h2><br />
            <img className="campuskollenlogo" src={foundGroup.logo} alt="" /><br />
            <p>{eval("foundGroup.desc" + lang)}</p>
            <div className="clothes">
                <p>{clothe_desc}</p><img className="campuskollenlogo" src={foundGroup.clothes} alt="" />
            </div><br />
            <h2>{relate_title}</h2><br/>
            {connected.map((group) => (<div className="dropdown-row"> {<KnappProg titel={eval("group.name" + lang)} link={group.code} color={group.color} color2={group.color2} />}</div>))}
        </div>

    );
}

export default Information;