import './App.css';
import {BrowserRouter, Routes, Route, Link, UseParams} from "react-router-dom";
import Home from './Home';
import Selection from './Selection'
import Information from './Information'
import { Helmet } from "react-helmet";
import{createContext, useState} from "react"

export const LangContext = createContext("SW");
function App() {
  const [lang, setLang] = useState("SW")
  //let lang = "SW";
  return (
    <LangContext.Provider value={lang}>
     <div>
       <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/tjg5yvi.css"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home onLang={setLang}/>} />
            <Route path="/:type" element={<Selection onLang={setLang}/>}/>
            <Route path="/info/:code" element={<Information onLang={setLang}/>}/>
          </Routes>
        </BrowserRouter>
      
      </div>
    </LangContext.Provider>
  );
}
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<App />);



export default App;
