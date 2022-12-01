import './App.css';
import {useNavigate} from "react-router-dom";

//tillbakaknapp
function TillbakaKnapp(props) {

    let Navigate = useNavigate();
    return (
        <button onClick={() => Navigate(-1)}><img className="backarrow" src="/img/backarrow.png"/></button>
    );
}
export default TillbakaKnapp;