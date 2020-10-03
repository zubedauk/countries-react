import React from 'react';
import Header from './Header';

import Search from './Search'

//import Selected from './selectedCountries.js'
import './App.css';
function App() {
  return (
    
    <div className="App">
      <div className="App-header">
          <Header/>
      </div>
    
      <div id="container">
        <Search/>
        {/* <Countries/> */}
      </div>
      
    </div>
  );
}

export default App;
