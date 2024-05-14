import React, { useState } from 'react'

const Form = ({createTodo}) => {

  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    createTodo(value);
    setValue('')
  }

  return (
    <form className='mb-4 w-full' onSubmit={handleSubmit}>
        <input type="text" className='outline-none bg-transparent border border-[#353632] p-4 md:w-[400px] text-[#e0ded7] mb-8 rounded placeholder:text-[#e0ded7]'
        placeholder='What task do you have for today?' onChange={(e) => setValue(e.target.value)} value={value}/>
        <button className='bg-[#353632] border-none rounded ml-2 p-4 text-[#e0ded7] cursor-pointer'>Add Task</button>
    </form>
  )
}

export default Form