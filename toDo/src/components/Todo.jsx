import React from 'react';

//Para criar essa função com atalho: rfce
const Todo = ({ listTasks, removeTodo, completeTodo }) => {
  return (
    <div className="todo" style={{textDecoration: listTasks.isCompleted ? "line-through" : ""}}>
      <div className="content">
        <div className="text-category">
          <p className="category">({listTasks.category})</p>
          <p>{listTasks.text}</p>
        </div>
        <div>
          <button className="buttonComplete" onClick={() => completeTodo(listTasks.id)}>Completar</button>
          <button className="buttonDeleteTask" onClick={() => removeTodo(listTasks.id)}>X</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
