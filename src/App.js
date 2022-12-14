import React, {useState, useEffect} from 'react'
import axios from 'axios'

import './App.css'

import Entries from './Components/Entries'
import Add from './Components/Add'
import Edit from './Components/Edit'
import Welcome from './Components/Welcome'


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


  const [show, setShow] = useState(false)
  const [showAdd, setShowAdd] = useState(false)

  const showJournal = (event) => {
      setShow(display => !display)

    }
    const addEntry = (event) => {
      setShowAdd(display => !display)
      setShow(false)
    }



  return (
  <>

          <nav>
              <h1>Carely</h1>
                  <a href="index.html">
                  <svg id="logo-15" width="100" height="100" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z" class="ccustom" fill="#17CF97"></path> <path d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z" class="ccustom" fill="#17CF97"></path> <path d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z" class="ccustom" fill="#17CF97"></path> <path d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z" class="ccustom" fill="#17CF97"></path> </svg>
                  </a>
                  {/* <h2>Carely</h2> */}
          <ul id="navbar">

              <li>
                  <a className="active" href="index.html">Welcome</a>
              </li>
              <li><a onClick={addEntry}>New Entry</a></li>

              <li><a onClick={showJournal}>Collection</a></li>
              <li><a href="index.html">Resources</a></li>
          </ul>
      </nav>

      <body>
        <div className="components">
          <Welcome/>
        { showAdd && <Add  handleCreate={handleCreate}/> }
        {entries.map((entry) => {
                return (
                  <>
                  <div className = "entries">
                    { show && <Entries entry={entry} />}
                  </div>
                  { show && <Edit entry={entry} handleEdit={handleEdit}/> }
                  { show && <button className="button" onClick={handleDelete} value={entry._id}>ERASE</button> }
                  </>
                )
        })}
        </div>
      </body>

  </>
  )
}

export default App;