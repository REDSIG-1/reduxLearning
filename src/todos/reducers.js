import { CREATE_TODO, REMOVE_TODO } from './actions';

export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
    case CREATE_TODO: {
        const { text } = payload;
        const newTodo = {
            text,
            isCompleted: false,
        };
        // concat will NOT mutate an array
        return state.concat(newTodo);
    }
    case REMOVE_TODO: {
        const { text } = payload;
        return state.filter(todo => todo.text !== text);
    }
    default:
        return state;
    }
}

// A reducer is a function 
// When an action is called, the reducer is called
// The 2 arguments given are:
// 1: current state
// 2: action which is triggerd (object with type and payload properties)
// 3: Decides what changes will take place to state and return updated state

// When working with reducers we must NOT mutate the state
