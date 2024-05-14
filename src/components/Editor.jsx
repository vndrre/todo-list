import React, { useState } from 'react'

const Editor = ({editTodo, task}) => {

  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue('')
  }

  return (
    <form className='mb-4 w-full' onSubmit={handleSubmit}>
        <input type="text" className='outline-none bg-transparent border border-[#353632] p-4 md:w-[400px] text-[#e0ded7] mb-8 rounded placeholder:text-gray-300'
        placeholder='Update Task' onChange={(e) => setValue(e.target.value)} value={value}/>
        <button className='bg-[#353632] border-none rounded ml-2 p-4 text-[#e0ded7] cursor-pointer'>Update Task</button>
    </form>
  )
}

export default Editor