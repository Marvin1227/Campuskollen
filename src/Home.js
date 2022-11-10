import './App.css';
import {groups} from './db';
import Knapp from './Knapp';
import KnappProg from './KnappProg';
import Searchbar from './searchbar';
import Flagga from './Flagga';

//Startsidan

function Home() {

    const num = Math.floor(Math.random()*groups.length); //slumpad index i databasen

    return (
        <div className="Home">
            <Searchbar/>
            <div className="KnappWrapper1">
                <Knapp titel="Program" link="Program"/>
                <Knapp titel="Festerier" link="Festeri"/>
                <Knapp titel="Phadderier" link="Phadderi"/>
                <Knapp titel="Föreningar" link="Förening"/>
            </div>
            <KnappProg titel={groups[num].nameSW} link={groups[num].code} color={groups[num].color} color2={groups[num].color2}/>
            <div>
                {/*<Flagga/>*/}
            </div>
        </div>
        
        
    );
  }

  export default Home;
