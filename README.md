# Lifting the state up in React

When we want to share the state between components, we can lift the state up to the closest common ancestor of those components. In this example, we have a `ToDoList`  and the `Task` component. We render all the tasks in the list and we want to be able to mark a task as completed. We can do this by lifting the state up to the `ToDoList` component and passing it down to the `Task` component.

The task component is goning to have acces to a function that we set in the parent, this function us updating the state.

If we use the function in the child we are going to update the state in the parent.