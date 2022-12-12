import {useState, useEffect} from 'react'
import axios from 'axios'

import Notepad from './CC'
import Prompts from './Prompt'

const Add = (props) => { 

    const [journal, setJournal] = useState(
        {
            date: '', 
            title: '', 
            entry: '', 
            breath: true, 
            body: true, 
            breaks: true,
            grace: true, 
            thoughts: true, 
            connect: true, 
            wins: true, 
            help: true, 
            moment: true
        }
    )

    const handleChange = (event) => {
     setJournal({...journal, [event.target.name]: event.target.value})
    }

    const handleChecked = (event) => {
        setJournal({...journal, [event.target.name]: event.target.checked})
    }
 
    const handleSubmit = (event) => {
       event.preventDefault()
       props.handleCreate(journal)
    }

    const [prompts, setPrompts] = useState([])
    const [show, setShow] = useState(false)

    const getPrompts = () => {
        axios.get('http://localhost:3000/prompts').then((response) => 
        setPrompts(response.data), (err) => 
        console.log(err)).catch((error) => 
        console.log(error))
    }

    const showPrompt = (event) => {
        setShow(display => !display)
    }

    useEffect(() => {
        getPrompts()
    }, [])
    
    

    return (

        <>
           <button onClick={showPrompt}>Click me for Inspiration!</button>
           <br/>
           {prompts.map((prompt) => {
            return (
                <>
             { show && <Prompts prompt={prompt}/> }
             </>
            )
        })}
            <form onSubmit={handleSubmit}>
                <br/>
                <label htmlFor='date'>Date: </label>
                <input type='text' name='date' placeholder="MM/DD/YYYY" onChange={handleChange}/>
                <br/><br/>
                <label htmlFor='title'>Title: </label>
                <input type='text' name='title' onChange={handleChange}/>
                <br/><br/>
                <Notepad onChange={handleChange}/>
                <br/><br/>
                <label htmlFor='breath'>I got out of bed and took a deep breath in and out. </label>
                <input type='checkbox' name='breath' onChange={handleChecked}/>
                <br/><br/>
                <label htmlFor='body'>I did something to support my body (sleep, eat, exercise). </label>
                <input type='checkbox' name='body' onChange={handleChecked}/>
                <br/><br/>
                <label htmlFor='breaks'>I took breaks when I needed them to do something I enjoy. </label>
                <input type='checkbox' name='breaks' onChange={handleChecked}/>
                <br/><br/>
                <label htmlFor='grace'>I practiced self-compassion and gave myself grace. </label>
                <input type='checkbox' name='grace' onChange={handleChecked}/>
                <br/><br/>
                <label htmlFor='thoughts'>I shifted my thoughts to what I can control and do versus what I can't. </label>
                <input type='checkbox' name='thoughts' onChange={handleChecked}/>
                <br/><br/>
                <label htmlFor='connect'>I connected with someone. </label>
                <input type='checkbox' name='connect' onChange={handleChecked}/>
                <br/><br/>
                <label htmlFor='wins'>I acknowledged small wins or gratitudes. </label>
                <input type='checkbox' name='wins' onChange={handleChecked}/>
                <br/><br/>
                <label htmlFor='help'>I asked for help when I needed it. </label>
                <input type='checkbox' name='help' onChange={handleChecked}/>
                <br/><br/>
                <label htmlFor='moment'>I took things one moment at a time. </label>
                <input type='checkbox' name='moment' onChange={handleChecked}/>
                <br/><br/>
                {/* <label>How was your day overall? 1-100</label>
                Slider */}

                <input type="submit"/>
            </form>
        </>
    )
}
export default Add
