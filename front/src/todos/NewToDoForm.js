import React, {useState} from 'react'

const NewToDoForm = () => {
    const [inputValue, setInputValue] = useState("");

  return (
    <div>
        <input type="text"
        value={inputValue}
        onChange = {e => setInputValue(e.target.value)}
        placeholder="Type your new to do"

        />
        <button>Create To Do</button>

    </div>
  )
}

export default NewToDoForm