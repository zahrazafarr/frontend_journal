import React, {useState, useEffect} from 'react'
import axios from 'axios'

import './App.css'

import Entries from './Components/Entries'
import Add from './Components/Add'
import Edit from './Components/Edit'

const App = () => {

  const [entries, setEntries] = useState([])


  const getEntries = () => {
    axios.get('http://localhost:3000/carely').then((response) => 
    setEntries(response.data), (err) => 
    console.log(err)).catch((error) => 
    console.log(error))
  }

  const handleCreate = (data) => {
    axios.post('http://localhost:3000/carely', data).then((response) => {
    console.log(response)
    getEntries()
    })
  }

  const handleEdit = (data) => {
    axios.put('http://localhost:3000/carely/' + data._id, data).then((response) => {
        console.log(response)
        let newEntry = entries.map((entry) => {
          return entry._id !== data._id ? entry : data
         })
         setEntries(newEntry)
      })
  }

  const handleDelete = (event) => {
      axios.delete('http://localhost:3000/carely/' + event.target.value).then((response) => {
        getEntries()
    })
  }


  useEffect(() => {
    getEntries()
  }, [])



  return (

    <div className="App">

      <h1>Carely</h1>

      <Add handleCreate={handleCreate}/>
      
       {entries.map((entry) => {

                return (
                  <>

                  <Entries entry={entry} />

                  <Edit entry={entry} handleEdit={handleEdit}/>

                  <button onClick={handleDelete} value={entry._id}>ERASE</button>

                  </>
                )
        })}

    </div>
 );
}

export default App;