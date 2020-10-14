import React from 'react'
import Data from './countriesAll.json'
const CountryDetail=(prop)=>{
    
   //send back to App.js to display block the countries.js
   function btnBackCountryDetailFunction(){
       //document.getElementsByClassName("countryDetailClick")[0].innerHTML=""
      // alert(document.getElementsByClassName("countries"))
        prop.btnBackCountryDetailFunction();
        
   }
    //get data from database again coming prop
    let country=Data.filter(function(obj){
        return obj.name.toLowerCase()===prop.selectedCountry.toLowerCase();
    })
    function  borders(arr){
        return(
            arr.borders.map(function(obj){
                return <button style={{fontSize:'18px',fontWeight:'bold',border:'0px',outLine:'0px',width:'8rem',height:'3rem',backgroundColor:prop.lightColour,color:prop.textColour}}>{obj}</button>
            })
        )
    }
    return(
        <>
            <div style={{marginBottom:'1rem'}}><button style={{width:'6rem',height:'2rem'}} onClick={btnBackCountryDetailFunction}>Back</button></div>
                <div style={{backgroundColor:prop.lightColour,width:'80%',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <div><img style={{width:'30rem'}} src={country[0].flag} alt="flag"/></div>
                        <div style={{width:'50%',padding:'1rem',color:prop.textColour}}>
                            <h2>{country[0].name}</h2>
                            <div style={{marginTop:'1rem',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                                <h4 style={{marginTop:'0.5rem'}}>Capital:{country[0].capital}</h4>
                                <h4 style={{marginTop:'0.5rem'}}>Region:{country[0].region}</h4>
                                <h4 style={{marginTop:'0.5rem'}}>Sub Region:{country[0].subregion}</h4>

                                <h4 style={{marginTop:'0.5rem'}}>Population:{country[0].population}</h4>
                                <h4 style={{marginTop:'0.5rem'}}>native Name:{country[0].nativeName}</h4>
                                <h4 style={{marginTop:'0.5rem'}}>Calling Code:{country[0].callingCodes}</h4>

                            </div>
                        </div>
                    </div>
                <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>{borders(country[0])}</div>
                </div>
               
            
        </>
    )
}
export default CountryDetail;