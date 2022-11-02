import { useState } from "react";
import {groups} from './db';

function Searchbar(props) {
    const [searchWord, setText] = useState("");

    const onSearch= (searchTerm)=>{

        console.log('search',searchTerm);
    }

    function setSearchString(event) {
        setText(event.target.value);
    }
//Måste tolowercase 
    function getName(name){
        let tolowersearchword = toLowerCase(name);
        let tolowerdb = toLowerCase(frat.name);
        let foundName = groups.find(frat => tolowerdb === tolowersearchword);
        return foundName;
    }
    const foundName = getName(searchWord);
    console.log(foundName);

    return ( 
        
    <div className="Wrapper">
        <div onChange={()=> onSearch(searchWord)}>
            <input className="Searchbar" type="text" placeholder="Sök.." onChange={setSearchString} />
        </div> 
        <div className="Dropdown">
        
        </div>
    </div>
    );
}
  export default Searchbar;