import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteTask, editTask, toggleTask} from "../redux/actions";

const TaskList = ({filter}) => {
    const [newText, setNewText] = useState('');
    const [isEdit, setIsEdit] = useState(null);
    const tasks = useSelector(state =>
        filter === 'all'
            ? state.taskReducer
            : state.taskReducer.filter(task => task.category === filter)
    );
    const dispatch = useDispatch();
    const handleEdit = (task) => {
        setNewText(task.text);
        setIsEdit(task.id);
    }
    const handleSave = (taskId) => {
        dispatch(editTask(taskId, {text: newText}));
        setIsEdit(null);
    }
    return (
        <div>
            <ul className='task-list'>
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className={`task-item ${task.completed ? 'completed' : ''}`}
                    >
                        {isEdit === task.id ? (
                            <>
                                <input
                                    type="text"
                                    value={newText}
                                    onChange={(e) => setNewText(e.target.value)}
                                />
                                <button onClick={() => handleSave(task.id)}>Save</button>
                                <button onClick={() => setIsEdit(null)}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <span onClick={() => dispatch(toggleTask(task.id))}>
                                    {task.text} <span>({task.category})</span>
                                </span>
                                <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                                <button onClick={() => handleEdit(task)}>Edit</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;