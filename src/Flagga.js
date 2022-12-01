import './App.css';
import React from 'react';

var lang = "SW";
//Språkknapp som ändrar språk
function Flagga({ onLang }) {
	
	function changeLanguage() {
		console.log("click");
		if (lang === "SW") {
			lang = "EN";
			console.log("if" + lang);
		}
		else {
			lang = "SW";
			console.log("else" + lang);
		}
		onLang(lang);
	}

	return (
		<button className="flagga" onClick={changeLanguage}><img className="flaggalogo" src={"/img/flagga.svg"} /></button>
	);
}
export default Flagga;

export var lang;
