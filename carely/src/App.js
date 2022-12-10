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

  const [show, setShow] = useState(false)
  const [showAdd, setShowAdd] = useState(false)

  const showJournal = (event) => {
    setShow(display => !display)
  }

  const addEntry = (event) => {
    setShowAdd(display => !display)
  }

  useEffect(() => {
    getEntries()
  }, [])

  return (

    <div className="App">

      <h1>Carely</h1>

      <button onClick={addEntry}>New Entry</button>
      { showAdd && <Add handleCreate={handleCreate}/> }

      <button onClick={showJournal}>Read Your Journal</button>
       {entries.map((entry) => {

                return (
                  <>

                  { show && <Entries entry={entry} />}
                  { show && <Edit entry={entry} handleEdit={handleEdit}/> }
                  { show && <button onClick={handleDelete} value={entry._id}>ERASE</button> }

                  </>
                )
        })}

    </div>
 );
}

export default App