import React, {useState} from 'react'
import axios from 'axios'

import './App.css';

const App = () => {

  const [entries, setEntries] = useState([])

  // const getEntries = () => {
  //   axios.get('----').then((response) => 
  //   getEntries(response.data), (err) => 
  //   console.log(err)).catch((error) => 
  //   console.log(error))
  // }

  return (
    <div className="App">

      <h1>Carely</h1>


    </div>
 );
}

export default App;
