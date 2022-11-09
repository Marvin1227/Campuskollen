import { useState } from "react";
import {groups} from './db';
import {Link} from "react-router-dom";

function Searchbar(props) {
    
    const sorted_groups = groups.sort((a,b) => a.nameSW.localeCompare(b.nameSW));
    //console.log(sorted_groups);

    const [searchWord, setText] = useState("");

    const onSearch = (searchTerm)=>{
        console.log('search',searchTerm);
    }

    function setSearchString(event) {
        setText(event.target.value); //uppdatera searchword
    }

    function getName(group){
        return group.nameSW.toLowerCase().indexOf(searchWord.toLowerCase()) >= 0; //funktion för att filtrera på searchword
    }
    
    var filtered = sorted_groups.filter(getName); //filtrering
    console.log(filtered);
    
    return ( 
    <div className="Wrapper">
        <div onChange={()=> onSearch(searchWord)}>
            <input className="Searchbar" type="text" placeholder="..." onChange={setSearchString} />
        </div> 
        <div className="Dropdown">
            {filtered.map((group) => (<Link to={"/frat/"+group.code}><div className="dropdown-row" > {group.nameSW}</div></Link>))}
        </div>
    </div>
    );
}
  export default Searchbar;