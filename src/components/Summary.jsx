import { useState } from "react";
 
function Summary(props) {

  return (
    <div>
      <h1>CART ITEMS:</h1>
      <p className="tasks-completed">Your cart has {props.tasksCompleted} products</p>
    </div>
  );
}
 
export default Summary;