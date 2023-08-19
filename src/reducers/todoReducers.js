function todoReducers(state = [], action) {
    if (action.type == 'add_todo') {
        let todoText = action.payload.todoText;
        return [
            ...state, {id: state.length + 1, todoData: todoText, finished: false}
            ]
    } else if (action.type == 'edit_todo') {
        let todo = action.payload.todo;
        let todoText = action.payload.todoText;
        const updatedList = state.map(t => {
            if(t.id == todo.id) {
                todo.todoData = todoText;
            }
            return t;
        });
        return updatedList;
    } else if (action.type == 'delete_todo') {
        let todo = action.payload.todo;
        const updatedList = state.filter(t => t.id != todo.id);
        return updatedList;
    } else if (action.type == 'finished_todo') {
        let isFinished = action.payload.isFinished;
        let todo = action.payload.todo;
        const updatedList = state.map(t => {
            if(t.id == todo.id) {
                todo.finished = isFinished;
            }
            return t;
        });
        return updatedList;
    } else {
        state;
    }
}

export default todoReducers;