
import { useSelector } from "react-redux";
import Todo from "../Todo/Todo";
// import TodoContext from "../../context/TodoContext";
// import { useContext } from "react";
// import TodoDispatchContext from "../../context/TodoDispatchContext";

function TodoList({todoFinished, editTodo, deleteTodo}) {

    const list = useSelector((state) => state.todo.todoList)
    console.log(list);

    // const {list} = useContext(TodoContext);
    // const {dispatch} = useContext(TodoDispatchContext);

    function onFinished(todo, isFinished) {
        todoFinished({todo, isFinished});
    }

    function onDelete(todo) {
        deleteTodo({todo});
     }  

    function onEdit(todo, todoText) {
        editTodo({todo, todoText})
    }

    return (
        <div>
            {list.length > 0 && 
            list.map((todo) => <Todo 
                                    key={todo.id} 
                                    id={todo.id}
                                    todoData={todo.todoData} 
                                    isFinished={todo.finished} 
                                    changeFinished={(isFinished) => onFinished(todo, isFinished)}
                                    onDelete={() => onDelete(todo)}
                                    onEdit={(todoText) => onEdit(todo, todoText)}
                                />)}
        </div>
    )
}

export default TodoList;