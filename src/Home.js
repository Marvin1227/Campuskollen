import './App.css';
import { groups } from './db';
import Knapp from './Knapp';
import KnappProg from './KnappProg';
import Searchbar from './searchbar';
import Flagga from './Flagga';
import TillbakaKnapp from './TillbakaKnapp';
import { Link } from "react-router-dom";
import { lang } from './Flagga';
import { useContext } from "react";
import { LangContext } from "./App"


//Startsidan

function Home({ onLang }) {

	const lang = useContext(LangContext);
	console.log(lang);
	const num = Math.floor(Math.random() * groups.length); //slumpad index i databasen

	var program = "";
	var phadderi = "";
	var festeri = "";
	var forening = "";

	if (lang == "SW") {
		program = "Program";
		phadderi = "Phadderier";
		festeri = "Festerier"
		forening = "Föreningar";
	} 
    else {
		program = "Programs";
		phadderi = "Phadderies";
		festeri = "Festeries";
		forening = "Associations";
	}

	var random = "groups[num].nameSW";
	if (lang == "SW") {
		return (
			<div className="home">
				<div className="header">
					<TillbakaKnapp />
					<h1><Link to={"/"}><img className="campuskollenlogo" src={"/img/logga6-small.png"} /></Link></h1>
					<div className="change_lang">{<Flagga onLang={onLang} />}</div>
				</div>

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
                <TillbakaKnapp />
					<h1><Link to={"/"}><img className="campuskollenlogo" src={"/img/logga6-small.png"} /></Link></h1>
					<div className="change_lang">{<Flagga onLang={onLang} />}</div>
				</div>

				<Searchbar />

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
