import React from 'react';
import Data from './countriesAll.json'
import EachRow from './EachRow'
//import selectedCountries from './selectedCountries'

const Countries=(prop)=>{
 //get country name from EachRow.js and send back to App.js
 function getBackFromRow(countryName){
     //alert("yes got it"+countryName)
     prop.selectedCountryFunction(countryName);
     
     //document.getElementsByClassName("countries")[0].innerHtml=""
 }
///////////////////////////extract all data
function extract(Data){
  
   return (Data.map(function(obj){
    
        return(<EachRow obj={obj} goBackFromRow={getBackFromRow} lightColour1={prop.lightColour} textColour1={prop.textColour}/>)
    }))
}
///////////////////////////////////////extract Search data
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
/////////////////////////////////////////////main

            
     if(prop.in==null){
       // alert(prop.lightColour)
         return(extract(Data))
     }else{
        // alert(prop.lightColour)
        return(extract1(Data) )
     }
    
}
export default Countries