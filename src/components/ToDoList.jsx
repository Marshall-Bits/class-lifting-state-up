import { useState } from "react"; // This useState is a hook that allows us to change one variable without reloading page and we can set this variable with a setFunction. It's the state of the component. 
// Every time we change the state the component is reloaded. NOT THE PAGE
import Task from "./Task"; // We import a component
import Summary from "./Summary"; // another component

const initialTasks = [
    {
        _id: "1a",
        name: "Macbook Pro",
        description: "Do something important",
        isDone: false
    },
    {
        _id: "2b",
        name: "HP caca",
        description: "Do something important",
        isDone: false
    },
    {
        _id: "3c",
        name: "Lenovo thinkpad ",
        description: "Do something important",
        isDone: false
    },
];

function ToDoList() {
    const [tasks, setTasks] = useState(initialTasks);
    const [tasksCompleted, setTasksCompleted] = useState(0);

    const toggleTaskDone = (id) => {
        const tasksCopy = [...tasks];

        tasksCopy.forEach((task) => {
            // Find the selected task and update task's `isDone` property,
            if (task._id === id) {
                task.isDone = task.isDone ? false : true;

                // then update `tasksCompleted` state variable
                if (task.isDone) setTasksCompleted(tasksCompleted + 1);
                else if (!task.isDone) setTasksCompleted(tasksCompleted - 1);
            }
            setTasks(tasksCopy);
        });
    }

    return (
        <div>
            <Summary tasksCompleted={tasksCompleted}/>

            <div className="todo-container">
                {tasks.map((task) => <Task key={task._id} toggleTaskDone={toggleTaskDone} task={task} />)}
            </div>
        </div>
    );
}

export default ToDoList;