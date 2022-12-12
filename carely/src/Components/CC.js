import React, {useState} from "react";


const Notepad = () => {
    
    const [characterCount, ChangeCharacterCount] = React.useState(0);
  
    const recalculate = e => {
      ChangeCharacterCount(e.target.value.length);
    }

    return (
      <div>
        <p>{characterCount}/800</p>
        <textarea
          maxLength={800}
          rows={5}
          className="notepad"
          onChange={recalculate}
          input type='text' 
          htmlFor='entry'
          name='entry' placeholder='Take a breath and start writing...'/>
      </div>
    );
}

export default Notepad