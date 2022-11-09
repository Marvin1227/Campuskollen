import './App.css';
import {BrowserRouter, Routes, Route, Link, UseParams} from "react-router-dom";
import Home from './Home';
import Selection from './Selection'
import Information from './Information'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:type" element={<Selection/>}/>
        <Route path="/info/:code" element={<Information/>}/>
      </Routes>
    </BrowserRouter>
  );
}
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<App />);



export default App;
