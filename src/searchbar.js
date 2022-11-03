import { useState } from "react";
import {groups} from './db';

function Searchbar(props) {
    
    const sorted_groups = groups.sort((a,b) => a.name.localeCompare(b.name));
    //console.log(sorted_groups);

    const [searchWord, setText] = useState("");

    const onSearch = (searchTerm)=>{
        console.log('search',searchTerm);
    }

    function setSearchString(event) {
        setText(event.target.value); //uppdatera searchword
    }

    function getName(group){
        return group.name.toLowerCase().indexOf(searchWord.toLowerCase()) >= 0; //funktion för att filtrera på searchword
    }
    var filtered = sorted_groups.filter(getName); //filtrering
    //if(searchWord){
    //    filtered = sorted_groups.filter(getName); //filtrering
    //    console.log(filtered);
    //}
    

    return ( 
    <div className="Wrapper">
        <div onChange={()=> onSearch(searchWord)}>
            <input className="Searchbar" type="text" placeholder="Sök.." onChange={setSearchString} />
        </div> 
        <div className="Dropdown">
            {filtered.map((group) => (<div className="dropdown-row"> {group.name}</div>))}
        </div>
    </div>
    );
}
  export default Searchbar;