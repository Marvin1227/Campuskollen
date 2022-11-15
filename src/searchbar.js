import { useState } from "react";
import {groups} from './db';
import {Link} from "react-router-dom";

function Searchbar(props) {
    
    const sorted_groups = groups.sort((a,b) => a.nameSW.localeCompare(b.nameSW)); //databasen sorterad alfabetiskt
    //console.log(sorted_groups);

    const [searchWord, setText] = useState("");

    function setSearchString(event) {
        setText(event.target.value); //uppdatera searchword
    }

    function isEmpty(){
        if(searchWord.length === 0){
            return true;
        }else
        return false;
    }

    function getName(group){
        if(!isEmpty()){
        return group.nameSW.toLowerCase().indexOf(searchWord.toLowerCase()) >= 0; //returnera på sökord
        }
        else return false; //returnera inget
    }
    
    
    var filtered = sorted_groups.filter(getName); //filtrering
    //console.log(filtered);
    
    return ( 
    <div className="Wrapper">
        <div>
            <input className="Searchbar" type="text" placeholder="..." onChange={setSearchString} />
        </div> 
        <div className="Dropdown">
            {filtered.map((group) => (<Link to={"/info/"+group.code}><div className="dropdown-row" > {group.nameSW}</div></Link>))}
        </div>
    </div>
    );
}
  export default Searchbar;