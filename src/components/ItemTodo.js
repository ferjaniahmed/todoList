import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
const ItemTodo = ({ id, title, discription, handelDelete, handelEdit }) => {
  return (
    <div className="item">
      <div className="item-txt">
        <h3>{title}</h3>
        <p>{discription}</p>
      </div>
      <div className="item-btn">
        <button
          onClick={() => {
            handelDelete(id);
          }}
          className="btn-delete"
        >
          <MdDelete />
        </button>
        <button
          onClick={() => {
            handelEdit(title, discription, id);
          }}
          className="btn-edit"
        >
          <MdEdit />
        </button>
      </div>
    </div>
  );
};

export default ItemTodo;
