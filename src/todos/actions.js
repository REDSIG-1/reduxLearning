// Will fire this action whenever user wants to creat a new todo.
// This is an "Action Type"
export const CREATE_TODO = 'CREATE_TODO';

// This is called an "Action Creator" function
// function which takes a parameter as a payload and exports a json object
export const createTodo = text => ({
    type: CREATE_TODO,
    payload: { text },
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: { text },
});
