import React from 'react'
import Data from './countriesAll.json'
import './App.css'
const Region=(prop)=>{
   
    //////////////////
    function extract(region){
     let regionData=Data.filter(function(obj){
         return obj.region===region
     })
        return (regionData.map(function(obj){
            return <div className="country" style={{backgroundColor:prop.lightColour}}>
                    <img alt="flag" src={obj.flag} />
                    <div style={countryDetail}>
                        <h1 style={{margin:'0.5rem',fontWeight:'800',fontSize:'1.3rem'}}>{obj.name}</h1>
                        <span style={ cssDetailItem}><span style={{color:prop.textColour}}>Population:</span><span style={cssDetailValue}>{obj.population}</span></span>
                        <span style={ cssDetailItem}><span style={{color:prop.textColour}}>Capital:</span><span style={cssDetailValue}>{obj.capital}</span></span>
                        <span style={ cssDetailItem}><span style={{color:prop.textColour}}>Region:</span><span style={cssDetailValue}>{obj.region}</span></span>

                    </div>
                    
            </div>
        }))
    }
    /////////////////
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

    return(
        <>
           
           
                {
                
                extract(prop.region)
                }
            
        </>
    )
}
export default Region;