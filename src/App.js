import React,{useState} from 'react';
import Header from './Header';
import Countries from './Countries'
import Search from './Search'
import Region from './Region'
import CountryDetail from './CountryDetail'
import Quiz from './Quiz.js'
import './App.css'

//import Selected from './selectedCountries.js'
import './App.css';

function App() {
  //
 //for this doc and search and countries
 const [darkColour,setDarkColour]=useState('hsl(207, 26%, 17%)');
 const [lightColour,setLightColour]=useState('hsl(209, 23%, 22%)')
 const [textColour,setTextColour]=useState('hsl(0, 0%, 52%)');
 const [start,setStart]=useState("start")
 function colourFunction(darkColour,lightColour,textColour){
 
  setDarkColour(darkColour);
  setLightColour(lightColour);
  setTextColour(textColour)
  
  
 }
 //common between this doc and header.ja
 const [quiz,setQuiz]=useState(null)
 function quizFunction(quiz){
 
  addName(null)
    setStart(null)
    setRegion(null);
  setQuiz(quiz);
  
  document.getElementById("countries").style.display="none"
   document.getElementById("countryDetailClick").style.display="none"
  document.getElementById("quiz").style.display="flex"
 }
 //common between this doc and quiz.ju
 function btnBackQuizFunction(){
   document.getElementById("countries").style.display="grid"
 
   document.getElementById("quiz").style.display="flex"
   setStart("start")

 }
 //common between Countries and this doc
const [selectedCountry,setSelectedCountry]=useState(null);
function selectedCountryFunction(name){
  
  addName(null)
    setStart(null)
    setRegion(null);
    setQuiz(null)
  setSelectedCountry(name)
  document.getElementById("countries").style.display="none"
  document.getElementById("countries").style.display="none"
  document.getElementById("countryDetailClick").style.display="block"
// document.getElementById("container").children[1].style.innerText=""
// document.getElementById("container").children[1].style.display="none";
}
///common between this doc and country detail
const [triggerCountries,setTriggerCountries]=useState(null)
function btnBackCountryDetailFunction(){
  //setSelectedCountry(null)
  document.getElementById("countries").style.display="none"
 document.getElementById("countries").style.display="grid"
 document.getElementById("countryDetailClick").style.display="none"
 
  setTriggerCountries("go")
 

}
  //common between this doc and region.js
  const [region,setRegion]=useState(null);
  function regionFunction(regionName){
   
    addName(null)
    setQuiz(null)
    setStart(null)
    setSelectedCountry(null)
    setRegion(regionName);
    
  }
  //common between this doc and Search.js
  const [name,addName]=useState(null);
  function searchCountry(name){
   
      if(name===""){
        setStart("start")
      }else{
        setStart(null)
      }
      setSelectedCountry(null)
      setRegion(null)
      
      addName(name);
  }
  return (
    
    <div className="App" style={{backgroundColor:darkColour}}>
      <div className="App-header" style={{backgroundColor:lightColour}}>
          <Header colourFunction={colourFunction} quizFunction={quizFunction}/>
      </div>
    
      <div id="container">
        <Search searchCountry={searchCountry} regionFunction={regionFunction} lightColour={lightColour} textColour={textColour} />
       
       
        <div id="countries" style={{backgroundColor:darkColour}}>
            {region &&(<Region region={region} lightColour={lightColour} textColour={textColour}/>)}
            {start &&(<Countries selectedCountryFunction={selectedCountryFunction} lightColour={lightColour} textColour={textColour}/>)}
            {name &&(<Countries in={name} selectedCountryFunction={selectedCountryFunction} lightColour={lightColour} textColour={textColour}/>)}
            {triggerCountries && (<Countries  selectedCountryFunction={selectedCountryFunction} lightColour={lightColour} textColour={textColour}/>)}
        </div>
        <div id="countryDetailClick" style={{backgroundColor:darkColour}}>
            {selectedCountry &&(<CountryDetail selectedCountry={selectedCountry} textColour={textColour} lightColour={lightColour} btnBackCountryDetailFunction={btnBackCountryDetailFunction} />)}
        </div>
        <div id="quizContainer" style={{backgroundColor:lightColour}}>
          <button  onClick={btnBackQuizFunction} style={{marginTop:'1rem',color:'textColour',width:'5rem',height:'2rem',backgroundColor:'white'}}>back</button>
          <div id="quiz">
             {quiz &&(<Quiz btnBackQuizFunction={btnBackQuizFunction} lightColour={lightColour} textColour={textColour} quiz={quiz} quizFunction={quizFunction}/>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
