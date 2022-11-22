import './App.css';
import {BrowserRouter, Routes, Route, Link, UseParams} from "react-router-dom";
import Home from './Home';
import Selection from './Selection'
import Information from './Information'
import { Helmet } from "react-helmet";


function App() {
  let lang = "SW";
  return (
    <div>
      <Helmet>
      <link rel="stylesheet" href="https://use.typekit.net/tjg5yvi.css"/>
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:type" element={<Selection/>}/>
          <Route path="/info/:code" element={<Information/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<App />);



export default App;
