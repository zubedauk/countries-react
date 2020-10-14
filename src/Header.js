// import React from 'react'

import React from 'react';
// export default Header;
import './App.css'
const Header=(pop)=>{
    function quizFunction(){
        pop.quizFunction("start")
    }
    function colourFunction(event){
      //hsl(0, 0%, 52%)
    //     //let mode=event.target.value;
    //    alert(event.target.value);
        if(event.target.textContent==="Day Mode"){
            event.target.textContent="Night Mode";
            pop.colourFunction('white','wheat','hsl(200, 15%, 8%)')
        }else{
           event.target.textContent="Day Mode";
            pop.colourFunction(' hsl(207, 26%, 17%)','hsl(209, 23%, 22%)','hsl(0, 0%, 52%)')
        }
     // 
    }
    return(
        <>
        <h3 style={{marginLeft:'1rem'}}>where in the world.......?{pop.in}</h3>
        <button onClick={quizFunction} style={{marginRight:'1rem',backgroundColor:'white',width:'5rem',height:'2rem',border:'0px',outLine:'0px',borderRadius:'25px',fontWeight:'bold'}}>Quiz</button>

        <button onClick={colourFunction} style={{borderRadius:'25px',marginRight:'1rem',backgroundColor:'white',width:'10rem',height:'2rem'}}>Colour Picker</button>
        </>
    )
}
export default Header;