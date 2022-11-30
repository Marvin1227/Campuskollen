import './App.css';
import React from 'react';
import { useState } from 'react';

var lang = "SW";
//Språkknapp som ändrar språk
function Flagga({ onLang }) {
	var buttonText = "To English"; //behöver vi ha text i knappen, borde räcka med bild på flagga

	if (lang == "SW") {
		buttonText = "To English";

	} else if (lang == "EN") {
		buttonText = "To Swedish";
	}

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
