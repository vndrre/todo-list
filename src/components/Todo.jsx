import React from 'react'

const Todo = ({task, deleteTodo, editTodo}) => {
  return (
    <div className='flex justify-between items-center bg-[#353632] text-[#e0ded7] font-semibold py-3 px-5 rounded-md mb-1 cursor-pointer'>
      <p>{task.task}</p>

      <div className='flex gap-4 items-center text-xl'>
        <ion-icon name="create" onClick={() => editTodo(task.id)}></ion-icon>
        <ion-icon name="trash" onClick={() => deleteTodo(task.id)}></ion-icon>
      </div>
    </div>
  )
}

export default Todo