import React, {useState, useEffect} from 'react'
import axios from 'axios'

import './App.css'

// import Entries from './Components/Entries'
// import Add from './Components/Add'
// import Edit from './Components/Edit'


const App = () => {

  // const PORT = process.env.PORT
  // const MONGODB_URI = process.env.MONGODB_URI;


  // const [entries, setEntries] = useState([])


  const getEntries = () => {
    axios.get('').then((response) => 
    getEntries(response.data), (err) => 
    console.log(err)).catch((error) => 
    console.log(error))
  }










  useEffect(() => {
    getEntries()
  }, [])




  return (
    <div className="App">

      <h1>Carely</h1>
      

      {/* {entries.map((entry) => {

                return (
                
                  <Entries entry={entry} />

                  )
                })} */}
    </div>
 );
}

export default App;