import './App.css';
import { useState } from 'react';
import Popup from 'react-animated-popup'

//infobakaknapp
function InfoKnapp() {

    const [visible, setVisible] = useState(false)

    return (
      <Popup visible={visible} onClose={() => setVisible(false)}>
        <p>I am a popup!</p>
      </Popup>
    );
}

export default InfoKnapp;
