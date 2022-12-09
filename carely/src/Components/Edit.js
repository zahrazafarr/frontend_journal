import {useState} from 'react'

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

  return(
    <>
        
        <label>Take a breath and start writing.</label>
            <form onSubmit={handleSubmit}>
                <label>Date: </label>
                <input type='text' name='date' onChange={handleChange}/>
                <br/><br/>
                <label>Title:</label>
                <input type='text' name='title' onChange={handleChange}/>
                <br/><br/>
                <input type='text' name='entry' onChange={handleChange}/>
                <br/><br/>
                <label>I got of bed and took a deep breath in and out.</label>
                <input type='checkbox' name='breath' onChange={handleChecked}/>
                <br/><br/>
                <label>I did something to support my body (sleep, eat, exercise)</label>
                <input type='checkbox' name='body' onChange={handleChecked}/>
                <br/><br/>
                <label>I took breaks when I needed them to do something i enjoy.</label>
                <input type='checkbox' name='breaks' onChange={handleChecked}/>
                <br/><br/>
                <label>I practiced self-compassion and gave myself grace.</label>
                <input type='checkbox' name='grace' onChange={handleChecked}/>
                <br/><br/>
                <label>I shifted my thoughts to what I can control and do versus what I can't</label>
                <input type='checkbox' name='thoughts' onChange={handleChecked}/>
                <br/><br/>
                <label>I connected with someone.</label>
                <input type='checkbox' name='connect' onChange={handleChecked}/>
                <br/><br/>
                <label>I acknowledged small wins or gratitudes.</label>
                <input type='checkbox' name='wins' onChange={handleChecked}/>
                <br/><br/>
                <label>I asked for help when I needed it.</label>
                <input type='checkbox' name='help' onChange={handleChecked}/>
                <br/><br/>
                <label>I took things one moment and day at a time.</label>
                <input type='checkbox' name='moment' onChange={handleChecked}/>
                <br/><br/>
                {/* <label>How was your day overall? 1-100</label>
                Slider */}


            <input type="submit"/>
        </form>
    </>
  )
}

export default Edit