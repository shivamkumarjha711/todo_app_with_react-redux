import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (todo, action) => {
            let todoText = action.payload.todoText;
            todo.todoList.push({id: todo.todoList.length + 1, todoData: todoText, finished: false})
        },
        editTodo: (todo, action) => {
            let paloadTodo = action.payload.todo;
            let todoText = action.payload.todoText;
            todo.todoList = todo.todoList.map(t => {       // in this we directly upadte state not again sore in const(var) by the help of magzine library provided by redux
                if(t.id == paloadTodo.id) {
                    t.todoData = todoText;
                }
                return t;
            });
        },
        todoFinished: (todo, action) => {
            let paloadTodo = action.payload.todo;
            let isFinished = action.payload.isFinished;
            todo.todoList = todo.todoList.map(t => {
                if(t.id == paloadTodo.id) {
                    todo.finished = isFinished;
                }
                return t;
            });
        },
        deleteTodo: (todo, action) => {
            let paloadTodo = action.payload.todo;
            todo.todoList = todo.todoList.filter(t => t.id !== paloadTodo.id)
        }
    }
});

export const { deleteTodo, addTodo, editTodo, todoFinished } = todoSlice.actions;
export default todoSlice.reducer;