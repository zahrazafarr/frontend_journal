import React, {useState} from "react";


export default function Notepad() {
    
    const [characterCount, ChangeCharacterCount] = React.useState(0);
  
    const recalculate = e => {
      ChangeCharacterCount(e.target.value.length);
    }

    return (
      <div>
        <p>{characterCount}/500</p>
        <textarea
          rows={5}
          className="notepad"
          onChange={recalculate}
          htmlFor='entry'
          input type='text' name='entry' placeholder='Take a breath and start writing...'/>
      </div>
    );
  }