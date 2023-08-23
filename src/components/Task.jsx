import { useState } from "react"; // THIS IS THE HOOK THAT ALLOWS US TO CHANGE THE STATE

function Task(props) {
  /*   const [taskCompleted, setTaskCompleted] = useState(false); // "false" is the first value

    const toggleTask = () => setTaskCompleted(!taskCompleted); */

    // we can also do this 👇
    /* function toggleTask () {
        if (taskCompleted === true) {
            setTaskCompleted(false)
        } else {
            setTaskCompleted(true)
        }
    }; */

    return (
        <div className="task-card">
            <div className="task-card-half">
                <h1>{props.task.name}</h1>
                {/*  THIS IS A TERNARY OPERATOR */}
                {props.task.isDone ? <span>DONE </span> : <span>PENDING ⌛</span>}

                <h2>Task Description</h2>
                <p>{props.task.description}</p>

                <button className="add" onClick={() => props.toggleTaskDone(props.task._id)}>
                    {props.task.isDone
                        ? <span>DELETE FROM CART </span>
                        : <span>ADD TO CART</span>
                    }
                </button>
            </div>
        </div>
    );
}

export default Task;