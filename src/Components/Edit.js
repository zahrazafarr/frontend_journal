import {useState} from 'react'
import Notepad from './CC'

const Edit = (props) => {

  const [journal, setJournal] = useState({...props.journal})

  const handleChange = (event) => {
    setJournal({...journal, [event.target.name]: event.target.value})
  }

  const handleChecked = (event) => {
    setJournal({...journal, [event.target.name]: event.target.checked})
  }

  const handleSubmit = (event) => {
      event.preventDefault()
      props.handleEdit(journal)
  }

  return (
    <>
      <details className="edit">
          <summary>Edit Entry</summary>

          <form onSubmit={handleSubmit}>
                <label>Date: </label>
                <input type='text' name='date' onChange={handleChange} value={journal.date}/>
                <br/><br/>
                <label>Title: </label>
                <input defaultValue={journal.title} type='text' name='title' onChange={handleChange} value={journal.title}/>
                <br/><br/>
                <Notepad onChange={handleChange} value={journal.entry}/>
                <br/><br/>
                <div className= "checkbox">
                    <label>I got of bed and took a deep breath in and out. </label>
                    <input type='checkbox' name='breath' onChange={handleChecked} value={journal.breath}/>
                    <br/><br/>
                    <label>I did something to support my body (sleep, eat, exercise). </label>
                    <input type='checkbox' name='body' onChange={handleChecked} value={journal.body}/>
                    <br/><br/>
                    <label>I took breaks when I needed them to do something I enjoy. </label>
                    <input type='checkbox' name='breaks' onChange={handleChecked} value={journal.breaks}/>
                    <br/><br/>
                    <label>I practiced self-compassion and gave myself grace. </label>
                    <input type='checkbox' name='grace' onChange={handleChecked} value={journal.grace}/>
                    <br/><br/>
                    <label>I shifted my thoughts to what I can control and do versus what I can't. </label>
                    <input type='checkbox' name='thoughts' onChange={handleChecked} value={journal.thoughts}/>
                    <br/><br/>
                    <label>I connected with someone. </label>
                    <input type='checkbox' name='connect' onChange={handleChecked} value={journal.connect}/>
                    <br/><br/>
                    <label>I acknowledged small wins or gratitudes. </label>
                    <input type='checkbox' name='wins' onChange={handleChecked} value={journal.wins}/>
                    <br/><br/>
                    <label>I asked for help when I needed it. </label>
                    <input type='checkbox' name='help' onChange={handleChecked} value={journal.help}/>
                    <br/><br/>
                    <label>I took things one moment and day at a time. </label>
                    <input type='checkbox' name='moment' onChange={handleChecked} value={journal.moment}/>
                    <br/><br/>
                </div>
                <br></br>
                {/* <label>How was your day overall? 1-100</label>
                Slider */}
          <input className="button" type="submit"/>
          <br></br>
        </form>

      </details>
    </>
  )
}

export default Edit