import React,{useState} from 'react';
import Data from './countriesAll.json'
import QuizRow from './QuizRow';
let total=0;
let count=0;
const Quiz=(prop)=>{
  
     //////////////style of this page
    
     const countryDetail={
        // color:prop.textColour,
        color:'red',
        display:'flex',
        flexDirection:'column',
        marginLeft:'0.5rem',
        // color:prop.textColour1,

    }
    const cssDetailValue={
        color:'gray',
        fontWeight:'300',
       
    }
    const cssDetailItem={
    
   
    
        marginTop:'0.5rem',
        fontWeight:'600',
        fontSize:'1rem'
    }
    
    ////////////////////////////back button
    
    /////////////////////////////data extraction
    let randomCountry;
    let randomFindCapitalPlace;
    const [country,setCountry]=useState([Data[0]])
    const [capitals,setCapitals]=useState(["Mariehamn","Kabul","Islamabad","dehli","london"])
    const [cap,setCap]=useState("Kabul")
   
    const [msg,setMsg]=useState(null)
    const [marks,setMarks]=useState(0)
    const [call,setCall]=useState("start");
    const [counter,setCounter]=useState(1)
    
    function extractCountry(){
        let randomCapitals=0;
        setCall("start")
        setMsg(null)
       setCounter(counter+1)
       
        randomCountry=Data[Math.floor((Math.random())*Data.length)].name
        document.getElementById("next").disabled=true;
       // setCountry(randomCountry)
       let arr=[],arr1=[];
        arr=Data.filter(function(obj){
            return obj.name===randomCountry
        })
        setCountry(arr)
        /////////// 5 capitals
        for(let i=0;i<4;i++){
            randomCapitals=Data[Math.floor((Math.random())*Data.length)].capital;
            arr1.push(randomCapitals)
        }
        //randomly find place tp push capital
        randomFindCapitalPlace=Math.floor((Math.random())*arr1.length)
        //push the capital of country on randm play
       
        let temp=arr1[randomFindCapitalPlace]
        arr1[randomFindCapitalPlace]=arr[0].capital;
        arr1.push(temp);
      
      
       setCap(arr[0].capital)
       setCapitals(arr1)
    
       
    }
    ////////////////////start agian
    function startAgain(event){
        count=0;
        total=0;
        setMarks(0)
        setMsg(null)
        setCounter(1)
        document.getElementById("next").style.display="block"
        document.getElementById("startAgain").style.display="none"
    }
    //////////////common between this and quizrow
    
    function answer(value){

        document.getElementById("next").disabled=false;
        if(counter===25){//no of questions
            
            if(total>=125){//passing percentage out of 250
                setMsg("congratulation:You have passed test:) ")
                //document.getElementById("next").disabled=true;
            }else{
                setMsg("You have failed test:(.try it next time")
                //document.getElementById("next").disabled=true;
            }

            count=0
            document.getElementById("next").style.display="none"
            document.getElementById("startAgain").style.display="block"
           //
            return
        }
        else{
        if(value==="right"){
            total=total+10;
            setMarks(total)
            count=count+1  
            
            setMsg("Excellent:you have won 10 points")
            setCall(null);
        }else{
            setMsg("Oops:(.the answer is wrong.the correct answer is "+cap)
            setCall(null);
        }
    }    

    }
    
    //////////////////////////shuffle
  
    function shuffle(capitals){
       
       // alert(obj[Math.floor((Math.random())*obj.length)])
       
        return(
            capitals.map(function(obj){
                
                
                return(
                    //<h1>jj</h1>
                    <>
                    
                    <QuizRow obj={obj} call={call} country={cap} textColour={prop.textColour} answer={answer} lightColour={prop.lightColour}  />
                  
                </>
                )
            })
        )
      
    }
    ////////////////////////////main
    return(
    <>
     <h4 style={{color:'blue',marginBottom:'1rem'}}>Question#{counter}</h4>
     
    <h3 style={{marginBottom:'1rem',fontStyle:'italic'}}>According to this card what is the capital of country underneath(10 points).?</h3>
    <div style={{border:'2px solid white',backgroundColour:'yellow',display:'flex',flexDirection:'row',justifyContent:'center'}}>
       
        <img alt="flag" src={country[0].flag} style={{marginTop:'1rem',width:'16rem',height:'12rem'}} />
        <div style={countryDetail}>
            <h1 style={{margin:'0.5rem',fontWeight:'800',fontSize:'1.3rem'}}>{country[0].name}</h1>
            <span style={ cssDetailItem}><span style={{color:prop.textColour1}}>Population:</span><span style={cssDetailValue}>{country[0].population}</span></span>
            <span style={ cssDetailItem}><span style={{color:prop.textColour1}}>Native language:</span><span style={cssDetailValue}>{country[0].nativeName}</span></span>
            <span style={ cssDetailItem}><span style={{color:prop.textColour1}}>Region:</span><span style={cssDetailValue}>{country[0].region}</span></span>
            <span style={ cssDetailItem}><span style={{color:prop.textColour1}}>Sub Region:</span><span style={cssDetailValue}>{country[0].subregion}</span></span>
            <span style={ cssDetailItem}><span style={{color:prop.textColour1}}>Calling Code:</span><span style={cssDetailValue}>{country[0].callingCodes}</span></span>
        </div>
    </div>
    <div id="result">
        <h3 style={{color:'blue',marginTop:'1rem'}}>Total Points:{marks}/250</h3>
        <p style={{fontStyle:'italic',fontSize:'18px',color:'green',marginTop:'1rem'}}>{msg}</p>
    </div>
    <div id="quizRow" style={{width:'100%',marginTop:'1rem',display:'flex',justifyContent:'center'}}>
        {shuffle(capitals)}
        <button id="next" onClick={extractCountry} style={{display:'block',fontWeight:'bold',marginLeft:'1rem',width:'6rem','height':'2.5rem'}}>Next</button>
        <button id="startAgain" onClick={startAgain} style={{display:'none',fontWeight:'bold',marginLeft:'1rem',width:'6rem','height':'2.5rem'}}>Start again</button>

    </div>
    </>
    
    )
}
export default Quiz;