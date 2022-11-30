import { useState } from "react";
import { groups } from './db';
import { Link } from "react-router-dom";
import { lang } from './Flagga';
import { matchSorter } from 'match-sorter';
//import Highlight from 'react-highlight';

function Searchbar(props) {

    const sorted_groups = groups.sort((a, b) => eval("a.name" + lang).localeCompare(eval("b.name" + lang))); //databasen sorterad alfabetiskt
    //console.log(sorted_groups);

    const [searchWord, setText] = useState("");

    function setSearchString(event) {
        setText(event.target.value); //uppdatera searchword
    }

    function isEmpty() {
        if (searchWord.length === 0) {
            return true;
        } else
            return false;
    }

    function getName(group) {
        if (!isEmpty()) {
            return eval("group.name" + lang + ".toLowerCase().indexOf(searchWord.toLowerCase())") >= 0 || group.code.indexOf(searchWord.toUpperCase()) >= 0; //returnera på sökord
        }
        else return false; //returnera inget
    }


    var filtered = sorted_groups.filter(getName); //filtrering

    //sortering efter searchword med hjälp av https://github.com/kentcdodds/match-sorter
    var sortw = matchSorter(filtered, searchWord, { keys: [item => eval("item.name" + lang)] });

    var barText = "Sök här...";

    if (lang == "SW") {
        barText = "Sök här...";

    } else if (lang == "EN") {
        barText = "Search here...";
    }

    return (
        <div className="search">
            <input className="Searchbar" type="text" placeholder={barText} onChange={setSearchString} />
            <div className="dropdown">
                {sortw.map((group) => (<Link to={"/info/" + group.code}><div className="dropdown-row"><h3>{eval("group.name" + lang)}</h3></div></Link>))}
            </div>
        </div>

    );
}
export default Searchbar;