import React from "react";
import ItemTodo from "./ItemTodo";

const ListTodo = ({ listItems, handelDelete, handelEdit }) => {
  return (
    <div className="list">
      {listItems.map((todo) => {
        return (
          <ItemTodo
            key={todo.id}
            title={todo.title}
            discription={todo.discription}
            handelDelete={handelDelete}
            handelEdit={handelEdit}
            id={todo.id}
          />
        );
      })}
    </div>
  );
};

export default ListTodo;
