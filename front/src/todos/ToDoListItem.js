import React from 'react'

const ToDoListItem = ({todo}) => {
  return (
    <div>
        <h3>{ToDoListItem.text}</h3>
    <div>
        <button>Mark Complete</button>
        <button>Remove</button>
    </div>

    </div>
  )
}

export default ToDoListItem