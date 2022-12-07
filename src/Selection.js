import './App.css';
import { groups } from './db';
import KnappProg from './KnappProg';
import TillbakaKnapp from './TillbakaKnapp';
import { Link, useParams } from "react-router-dom";
import Flagga from './Flagga';
import { lang } from './Flagga';

//Sidan med alla föreningar av en typ, landar här från de fyra stora knapparna på startsidan
//Program, Föreningar, Festerier, Phadderier
function Selection({ onLang }) {

    let { type } = useParams(); //hämtning av typ från url
    
    const sorted_groups = groups.sort((a, b) => eval("a.name" + lang).localeCompare(eval("b.name" + lang))); //hela databasen sorterad alfabetiskt

    var filtered = sorted_groups.filter((group) => (group.type === type)); //filtrering efter typ

    let title = "";
    let eng_type = "";

    if(lang==="SW"){
        title = "Välj " + type + " (A-Ö)";
    }
    else{
        if(type==="Förening") {eng_type="Association";}
		else {eng_type=type;}
        title = "Select " + eng_type + " (A-Z)";
    }

    return (
        <div className="home">
            <div className="header">
                <TillbakaKnapp />
                <h1><Link to={"/"}><img className="campuskollenlogo" src={"/img/logga6-small.png"} /></Link></h1>
                <Flagga onLang={onLang} />
            </div>
            <h2>{title}</h2>
            {filtered.map((group) => (<div className="group-selection"> {<KnappProg titel={eval("group.name" + lang)} link={group.code} color={group.color} color2={group.color2} />}</div>))}
        </div>

    );
}

export default Selection;