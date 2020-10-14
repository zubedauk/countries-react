
import React from 'react';
import Data from './countriesAll.json'

import './Search.css';
import './App.css'


const Search=(prop)=>{
  
    //:hsl(209, 23%, 22%);
    function searchCountry(event){
      
        prop.searchCountry(event.target.value)
          
    }
     ///////////////////////
     //const [region,setRegion]=useState(null);
     function select(event){
         //alert(event.target.value)
      //  setRegion(event.target.value)
        prop.regionFunction(event.target.value)
         
     }
    //////////////////////////////////// 
    return(
        <div style={{width:'100%',display:'flex',justifyContent:'spaceBetween'}}>
            
                <div className="search">
                    <input type="text" style={{width:'20rem',height:'2rem',backgroundColor:prop.lightColour,color:prop.textColour}} onChange={searchCountry}/>
                </div>
                
                <div>
                    <select onChange={select} style={{width:'20rem',height:'2rem',backgroundColor:prop.lightColour,color:prop.textColour,marginTop:'0.5rem'}}>
                        <option value="Filter by region" selected="Filter by region"> Filter by region</option>
                        {
                            Data.map(function(obj){
                                return <option value={obj.region}>{obj.region}</option>
                            })
                        }
                    </select>
                </div>   
            
       </div>
    )
}

export default Search;