import { useState } from "react"

import { Search } from "./components/Search"
import Todo from "./components/todo"
import ToDoForm from "./components/toDoForm"
import Filter from "./components/Filter"
import "./App.css"
function App() {

  //Use state permite a renderização
  const [all, setAll] = useState([
    {
      id: 1,
      text: "Criar funcionalida X no sistema",
      category: "Trabalho",
      isCompleted: false
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false
    }, {
      id: 3,
      text: "Estudar React",
      category: "Pessoal",
      isCompleted: false
    }
  ])

  const [search, setSearch] = useState("")

  const addTodo = (text, category) => {

    //Recebe todos os dados atuais e o novo dado
    const newTodo = [...all, {
      id: Math.floor(Math.random() * 10000),
      text: text,
      category: category,
      isCompleted: false
    }]

    setAll(newTodo)

  }

  const removeTodo = (id) => {
    {
      let newTodos = [...all]

      const filterTodos = newTodos.filter((todo) =>
        todo.id !== id ? todo : null)

      setAll(filterTodos)
    }
  }

  const completeTodo = (id) => {
    let newTodos = [...all]
    //Se o id for iqual o valor do isCompleted muda
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setAll(newTodos)
  }

  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("Asc")


  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} sort={sort} setSort={setSort}/>
      <div className="todo-List">
        {all
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
              ? todo.isCompleted
              : !todo.isCompleted
          )
          .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
          .sort((asc, desc) => sort === "Asc"
           ? asc.text.localeCompare(desc.text)
           : desc.text.localeCompare(asc.text))
          .map((todo) => (
            <Todo listTasks={todo} key={todo.id} removeTodo={removeTodo} completeTodo={completeTodo} />
          ))}
      </div>
      <ToDoForm addTodo={addTodo}></ToDoForm>
    </div>
  )
}
export default App
