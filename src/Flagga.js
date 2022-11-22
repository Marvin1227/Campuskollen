import './App.css';

//Språkknapp som ändrar språk
function Flagga() {
    var lang = "SW";

    function changeLanguage() {
      console.log("click");
      if(lang === "SW"){
        lang = "EN";
        console.log("if");
        }
      else{
        lang="SW";
        console.log("else");
        }
    }
  return ( 
      <button className="Flagga" onClick={changeLanguage()}>byt språk {lang}</button>
  );
}
export default Flagga;
