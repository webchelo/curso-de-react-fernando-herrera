import { useTodo } from './hooks/useTodo'
import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";


export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleNewTodo, handleToggleTodo } = useTodo()

  return (
    <>
        <h1>TodoApp: { todosCount }, <small>pendientes: { pendingTodosCount }</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList
                    todos={ todos }
                    onDeleteTodo={ handleDeleteTodo }
                    onToggleTodo={ handleToggleTodo }
                />
            </div>
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
               
                <TodoAdd handleNewTodo={ handleNewTodo }/>

            </div>
          
        </div>
    </>
  )
}
