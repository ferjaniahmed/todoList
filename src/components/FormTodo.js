import React from "react";

const FormTodo = ({
  handelDiscription,
  itemDiscription,
  handelSubmit,
  item,
  handelItem,
}) => {
  return (
    <div>
      <form onSubmit={handelSubmit} className="form">
        <input
          type="text"
          placeholder="TODO"
          className="input"
          onChange={handelItem}
          value={item}
        />
        <textarea
          placeholder="Discrption..."
          value={itemDiscription}
          onChange={handelDiscription}
          className="textarea"
        />
        <button type="submit" className="btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default FormTodo;
