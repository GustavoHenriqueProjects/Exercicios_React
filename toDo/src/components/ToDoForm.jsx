import { useState } from 'react'

const ToDoForm = ({ addTodo }) => {

  let [value, setValue] = useState("")
  let [category, setCatedory] = useState("")

  const handleSubimit = (e) => {
    e.preventDefault()

    //If o value ou a categoria forem vazios retorne nada
    // se nao retorne eles vazios
    if (!value || !category) {


      let app = document.querySelector(".app")
      let mensagemErro = document.createElement('div');
      mensagemErro.textContent = "Atenção, preencha todos os campos.";
      mensagemErro.classList.add('error');
      app.appendChild(mensagemErro);
      setTimeout(() => {
        mensagemErro.remove();
      }, 3000);

    } else {
      addTodo(value, category)
      setValue("")
      setCatedory("")
    }
  }

  return (
    <div className="todoForm">
      <h2>Criar Tarefa</h2>
      <form onSubmit={handleSubimit}>
        <input type="text"
          placeholder="Digite o título"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCatedory(e.target.value)} >
          <option value="">Seleciona uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit" className="buttonCreateTasks">Criar Tarefa</button>
      </form>
    </div>
  )
}

export default ToDoForm