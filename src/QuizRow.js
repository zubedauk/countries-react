import React  from 'react'
import './App.css'
const QuizRow=(prop)=>{
    const borderColour={
        backgroundColor:'rgb(244,164,96)',
        padding:'0.5rem',
        fontSize:'14px',
        fontWeight:'bold',
        color:'black',border:'3px solid white',
       
    }
    ///////////////////////////////////
   
    function check(event){
       
        if(prop.call==="start"){
            if(prop.country===event.target.textContent)
            {
                prop.answer("right");
            }else{
                prop.answer("wrong")
            
            }
        }
    }
   
    return(
        <>
        
         <button id={prop.obj} style={borderColour} onClick={check}>{prop.obj}</button>
            
        </>
    )
}
export default QuizRow;