import './App.css';
import {groups} from './db';
import Knapp from './Knapp';
import KnappProg from './KnappProg';
import Searchbar from './searchbar';
import Flagga from './Flagga';
import TillbakaKnapp from './TillbakaKnapp';
import {Link} from "react-router-dom";
import {lang} from './Flagga';
import{useContext} from "react";
import {LangContext} from "./App"

//Startsidan

function Home({onLang}) {

    const lang = useContext(LangContext); 
        console.log(lang);
    const num = Math.floor(Math.random()*groups.length); //slumpad index i databasen

    var forening = "Föreningar";

    if(lang == "SW"){
        forening = "Föreningar";
    }else if (lang == "EN") {
        forening = "Associations";
    }
    
    var random = "groups[num].nameSW";
    if(lang == "SW"){
        return (
            <div className="home">
                <div className="header">
                    
                <TillbakaKnapp className="backArrow"/> 
                    <h1>
                        <Link to={"/"}> Campuskollen</Link>
                    </h1>
                </div>
                
                    <Searchbar/>
                    <div className="btn-container">
                        <div className="selections">
                            <Knapp titel="Program" link="Program"/>
                            <Knapp titel="Festerier" link="Festeri"/>
                            <Knapp titel="Phadderier" link="Phadderi"/>
                            <Knapp titel={forening} link="Förening"/>
                        </div>
                        <div className="random">
                        <KnappProg titel={groups[num].nameSW} link={groups[num].code} color={groups[num].color} color2={groups[num].color2}/>
                        </div>
                    </div>
                    <div className="change_lang"> {<Flagga onLang={onLang}/>} 
                </div>
            </div>
            
            
        );

    }else if (lang == "EN") {
        return (
            <div className="home">
                <div className="header">
                    
                <TillbakaKnapp className="backArrow"/> 
                    <h1>
                        <Link className="homeButton" to={"/"}> Campuskollen</Link>
                    </h1>
                </div>
                
                    <Searchbar/>
                    <div className="btn-container">
                        <div className="selections">
                            <Knapp titel="Program" link="Program"/>
                            <Knapp titel="Festerier" link="Festeri"/>
                            <Knapp titel="Phadderier" link="Phadderi"/>
                            <Knapp titel={forening} link="Förening"/>
                        </div>
                        <div className="random">
                        <KnappProg titel={groups[num].nameEN} link={groups[num].code} color={groups[num].color} color2={groups[num].color2}/>
                        </div>
                    </div>
                    <div className="change_lang"> {<Flagga onLang={onLang}/>} 
                </div>
            </div>
            
            
        );

    } 
  }

  export default Home;
