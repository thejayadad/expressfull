import React from 'react'
import ToDoListItem from './ToDoListItem'
import NewToDoForm from './NewToDoForm'
const ToDoList = ({todos= [] }) => {
  return (
    <div>
        <NewToDoForm />
        {todos.map(todo => <ToDoListItem todo={todo} />)}
    </div>
  )
}

export default ToDoList