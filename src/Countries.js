import React from 'react';
import Data from './countriesAll.json'

//import selectedCountries from './selectedCountries'

const Countries=(prop)=>{
function extract(Data){
   return (Data.map(function(obj){
        return <div className="country">
                <img alt="flag" src={obj.flag} />
                <div style={countryDetail}>
                    <h1 style={{margin:'0.5rem',fontWeight:'800',fontSize:'1.3rem'}}>{obj.name}</h1>
                    <span style={ cssDetailItem}>Population:<span style={cssDetailValue}>{obj.population}</span></span>
                    <span style={ cssDetailItem}>Capital:<span style={cssDetailValue}>{obj.capital}</span></span>
                </div>
                
        </div>
    }))
}
/////////////////////
function extract1(Data){
   
    let  nameList=Data.filter(function(obj){
        return prop.in.toLocaleLowerCase()===obj.name.toLocaleLowerCase().slice(0,prop.in.length);
    })
    
    if(nameList.length===0){
       return(
        extract(Data)
      // document.getElementsByClassName("countries")[0].innerHTML=""; 
       )
// document.getElementsByClassName("Scountries")[0].innerHTML="";
    }
    else{
        return(
        extract(nameList)
       // document.getElementsByClassName("countries")[0].innerHTML="";
        )
    }
    
}
//////////////////
 const countryDetail={
        display:'flex',
        flexDirection:'column',
        marginLeft:'0.5rem',
        color:'black'

    }
    const cssDetailValue={
        color:'hsl(0, 0%, 52%)',
        fontWeight:'300'
    }
    const cssDetailItem={
        marginTop:'0.5rem',
        color:'white',
        fontWeight:'600',
        fontSize:'1rem'
    }
   
    ///////////////////from data base
    
     if(prop.in==null){
    return(
        <>
       
        <div className="countries">
        {
           extract(Data)
        }
       </div>
       </>
    )
     }else{
         return(
            <>
             <span className="countries">
             {
                 extract1(Data)
             }
             </span>
            
             
             
             </>
         
        
         )
     }
    
}
export default Countries