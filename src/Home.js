import './App.css';
import { groups } from './db';
import Knapp from './Knapp';
import KnappProg from './KnappProg';
import Searchbar from './searchbar';
import Flagga from './Flagga';
import TillbakaKnapp from './TillbakaKnapp';
import InfoKnapp from './InfoKnapp';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LangContext } from "./App";
import Popup from 'react-animated-popup';
import { useState } from 'react';

//Startsidan
function Home({ onLang }) {

	const lang = useContext(LangContext);
	console.log(lang);
	const num = Math.floor(Math.random() * groups.length); //slumpad index i databasen

	var program = "";
	var phadderi = "";
	var festeri = "";
	var forening = "";
	var infotext = "";

	if (lang == "SW") {
		program = "Program";
		phadderi = "Phadderier";
		festeri = "Festerier"
		forening = "Föreningar";
		infotext = "Campuskollen samlar tekniska fakultetens alla program, föreningar, phadderier och festerier " +
					"vid Campus Norrköping för dig att upptäcka och läsa på om. Använd sökfältet eller tryck dig " +
					"själv vidare för att hitta det du söker efter.";
	} 
    else {
		program = "Programs";
		phadderi = "Phadderies";
		festeri = "Festeries";
		forening = "Associations";
		infotext = "Campuskollen collects all of the programs, associations, phadderies and festeries " + 
					"under the technical faculty at Campus Norrköping for you to discover. Use the " + 
					"search bar or tap your way around to find what you are looking for.";
	}

	//popup
	const [visible, setVisible] = useState(false);
	
	const popupStyle = {
		backgroundColor: '#FFF',
		color: 'var(--blu)',
		padding: '2rem',
		cursor: 'pointer',
		boxShadow: "rgb(23 16 74 / 40%) 0 0 0 100rem",
		textAlign: "center"
	}
	
	var random = "groups[num].nameSW";
	if (lang == "SW") {
		return (
			<div className="home">
				<div className="header">
					<div  onClick={() => setVisible(!visible)}><img src="/img/i.svg" className="backarrow"/></div>
					<h1><Link to={"/"}><img className="campuskollenlogo" src={"/img/logga6-small.png"} /></Link></h1>
					<Flagga onLang={onLang} />
				</div>
				<Popup style={popupStyle} visible={visible} onClose={() => setVisible(false)}>
					<div onClick={() => setVisible(false)}>
						<img src="/img/logga6.png" className="infologo"/> 
						<p>{infotext}</p>
						<p class="small">Tryck var som helst för att stänga detta fönster</p>
					</div>
				</Popup>
				<Searchbar />
				<div className="btn-container">
					<div className="selections">
						<Knapp titel={program} link="Program" />
						<Knapp titel={festeri} link="Festeri" />
						<Knapp titel={phadderi} link="Phadderi" />
						<Knapp titel={forening} link="Förening" />
					</div>
					<div className="random">
						<h3>Slumpad sida</h3>
						<KnappProg titel={groups[num].nameSW} link={groups[num].code} color={groups[num].color} color2={groups[num].color2} />
					</div>
				</div>
			</div>

		);

	} else if (lang == "EN") {
		return (
			<div className="home">
				<div className="header">
					<div  onClick={() => setVisible(!visible)}><img src="/img/i.svg" className="backarrow"/></div>
					<h1><Link to={"/"}><img className="campuskollenlogo" src={"/img/logga6-small.png"} /></Link></h1>
					<Flagga onLang={onLang} />
				</div>
				<Popup style={popupStyle} visible={visible} onClose={() => setVisible(false)}>
					<div onClick={() => setVisible(false)}>
						<img src="/img/logga6.png" className="infologo"/> 
						<p>{infotext}</p>
						<p className="small">Tap anywhere to close this window</p>
					</div>
				</Popup>
				<Searchbar/>
				
				<div className="btn-container">
					<div className="selections">
						<Knapp titel={program} link="Program" />
						<Knapp titel={festeri} link="Festeri" />
						<Knapp titel={phadderi} link="Phadderi" />
						<Knapp titel={forening} link="Förening" />
					</div>
					<div className="random">
						<h3>Random page</h3>
						<KnappProg titel={groups[num].nameEN} link={groups[num].code} color={groups[num].color} color2={groups[num].color2} />
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
