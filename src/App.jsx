
import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import todoReducer, { addTodo, deleteTodo, editTodo, todoFinished } from "./slices/todoSlice"

function App() {
  // const [list, setList] = useState([
  //   {id: 1, todoData: 'todo 1', finished: false},
  //   {id: 2, todoData: 'todo 2', finished: false}
  // ]); 

  const dispatch = useDispatch();
  const actions = bindActionCreators({ addTodo, deleteTodo, editTodo, todoFinished}, dispatch)
  
  return (
    <>
      <AddTodo addTodo={actions.addTodo} />
      <TodoList deleteTodo={actions.deleteTodo} editTodo={actions.editTodo} todoFinished={actions.todoFinished} />
    </>

    // <TodoContext.Provider value={{list}}>       // jis jis componenet me hame data bhejna hai un components ko ham Context me rape/bandhe dete hai
    //  <TodoDispatchContext.Provider value={{dispatch}}>
    //     <AddTodo />
    //     <TodoList />
    //     </TodoDispatchContext.Provider>
    // </TodoContext.Provider>
  )
}

export default App
