import React, { useState } from 'react'

const Todo = () => {

    const [todos, setTodos] = useState([]);
    const [newTodo, setnewTodo] = useState('');

    const [editIndex, setEditIndex] = useState(null);

    // console.log('newTodo',newTodo);

    const handleAddTodo = () => {

        if (editIndex !== null) {
            console.log("Updated the todos");

            const updatedTodo = todos.map((todo,i)=>(
                editIndex == i ? newTodo : todo
            ))

            console.log("updatedTodo",updatedTodo);

            setTodos(updatedTodo);
            setEditIndex(null);
        }
        else {
            console.log("add new todo");
            setTodos([...todos, newTodo]);
            setnewTodo('');
        }

        setnewTodo('');
    }

    const handleEditTodo = (index) => {
        console.log("index", index);
        setEditIndex(index);
        setnewTodo(todos[index]);
    }

    console.log("editIndex", editIndex);

    const handleDeleteTodo = (index) => {
        console.log("index", index);

        const updatedTodo = todos.filter((_,i) => index != i);
        console.log('deletedafter',updatedTodo);

        setTodos(updatedTodo);
    }
    // console.log("todos when updated select", todos);

    return (
        <>
            <input type="text" value={newTodo} onChange={(e) => { setnewTodo(e.target.value) }} placeholder="Add a new todo" />
            <button onClick={handleAddTodo}>
                
                {editIndex != null ? 'Update Todo' : 'Add New Todo' }
                
                </button>

            <ul>
                {
                    todos.map((todo, index) => (
                        <li key={index}>
                            {todo}
                            <button onClick={() => handleEditTodo(index)}>Edit Todo</button>
                            <button onClick={() => handleDeleteTodo(index)}>Remove Todo</button>
                        </li>
                    ))
                }
            </ul>


        </>
    )
}

export default Todo