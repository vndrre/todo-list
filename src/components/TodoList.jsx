import React, { useState } from 'react'
import Add from './Add'
import Todo from './Todo'
import Editor from './Editor'
import {v4 as uuidv4} from 'uuid'
uuidv4()

const TodoList = () => {

    const [todoValue, setTodo] = useState([]); 

    const createTodo = todo => {
        setTodo([...todoValue, {id: uuidv4(), task: todo, isEditing: false}])
    }

    const deleteTodo = id => {
        setTodo(todoValue.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodo(todoValue.map(todo => todo.id === id ? {...todo, isEditing:!todo.isEditing}: todo))
    }


    const editTask = (task, id) => {
        setTodo(todoValue.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
    }

    return (
        <div className='bg-[#1e1f1d] p-8 rounded-md md:w-[600px] w-[300px] text-center'>
            <Add createTodo = {createTodo}/>
            {
                todoValue.map((todo, index) => (
                    todo.isEditing ? (
                        <Editor editTodo={editTask} task={todo} key={index}/>
                    ) :(
                        <Todo task={todo} key={index} deleteTodo={deleteTodo} editTodo={editTodo}/>
                    )
                ))
            }
        </div>
    )
}

export default TodoList