import './App.css';
import {groups} from './db';
import Knapp from './Knapp';
import KnappProg from './KnappProg';
import Searchbar from './searchbar';

function Home() {

    //test
    //const mt = g

    //console.log(groups[0].name);

    const all = groups;
    

    return (
        <div className="Home">
            <Searchbar/>
            <div className="KnappWrapper1">
                <Knapp titel="Program" link="/legionen"/>
                <Knapp titel="Festerier" link="/legionen"/>
                <Knapp titel="Phadderier" link="/legionen"/>
                <Knapp titel="Föreningar" link="/legionen"/>
            </div>
            <KnappProg titel="Medieteknik" link="/legionen"/>
            <p></p>
        </div>
        
    );
  }

  export default Home;
