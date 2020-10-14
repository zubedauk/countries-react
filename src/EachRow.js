import React from 'react'
const EachRow=(prop)=>{
    ////////////////////
    
    const countryDetail={
        color:prop.textColour1,
        display:'flex',
        flexDirection:'column',
        marginLeft:'0.5rem',
        // color:prop.textColour1,

    }
    const cssDetailValue={
        color:'gray',
        fontWeight:'300'
    }
    const cssDetailItem={
      
       color:prop.textColour1,
        marginTop:'0.5rem',
        fontWeight:'600',
        fontSize:'1rem'
    }
    //////////call back to countries
    function clickCountry(){
        
        prop.goBackFromRow(prop.obj.name)
    }
    
    return(<div className="country" style={{backgroundColor:prop.lightColour1}}>
    <img alt="flag" src={prop.obj.flag} onClick={clickCountry} />
        <div style={countryDetail}>
            <h1 style={{margin:'0.5rem',fontWeight:'800',fontSize:'1.3rem'}}>{prop.obj.name}</h1>
            <span style={ cssDetailItem}><span style={{color:prop.textColour1}}>Population:</span><span style={cssDetailValue}>{prop.obj.population}</span></span>
            <span style={ cssDetailItem}><span style={{color:prop.textColour1}}>Capital:</span><span style={cssDetailValue}>{prop.obj.capital}</span></span>
            <span style={ cssDetailItem}><span style={{color:prop.textColour1}}>Region:</span><span style={cssDetailValue}>{prop.obj.region}</span></span>
        </div>
    </div>
    )
}
export default EachRow;