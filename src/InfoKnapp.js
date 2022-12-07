import './App.css';
import { useState } from 'react';

//infobakaknapp
const InfoKnapp = (props) => {

const [isOpen, setOpen] = useState();

function togglePopup() {
    setOpen(!isOpen);
}

props.func(isOpen);

return(
    <button onClick={togglePopup}><img className="backarrow" src="/img/i.svg"/></button>
);
}

export default InfoKnapp;
