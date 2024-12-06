import './App.css';
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import CategoryFilter from "./components/CategoryFilter";
import {useState} from "react";

function App() {
    const [filter, setFilter] = useState('');
    return (
        <div className="app-container">
            <h1>Task Manager</h1>
            <AddTask/>
            <CategoryFilter onChange={setFilter}/>
            <TaskList filter={filter}/>
        </div>
    );
}

export default App;
