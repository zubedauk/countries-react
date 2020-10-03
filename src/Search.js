import React,{useState} from 'react';
import Countries from './Countries'
import './Search.css';
import './App.css'


const Search=()=>{
    const [name,addName]=useState()
    
    function searchCountry(event){
        
        
        addName(event.target.value)
    }   
   
    //////////////////////////////////// 
    return(
        <div>
            
            <div className="search"><input type="text" style={{width:'20rem',height:'2rem'}} onChange={searchCountry}/></div>
             <Countries in={name}/> 
           

       </div>
    )
}

export default Search;