import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {categoriesReducer} from "../redux/reducers/taskReducer";
import {addTask} from "../redux/actions";

const AddTask = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categoriesReducer);
    const [text, setText] = useState('');
    const [category, setCategory] = useState('Personal');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()){
            const task = {
                id: Date.now(),
                text: text,
                category: category,
                completed: false
            }
            dispatch(addTask(task));
            setText('');
        }
    }
    return (
        <div>
            <form className="add-task-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder='Add New Task'
                />
                <select value={category} onChange={(e)=> setCategory(e.target.value)}>
                    {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
                <button type='submit' >Add Task</button>
            </form>
        </div>
    );
};

export default AddTask;