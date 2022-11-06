import React from "react";
import { useState } from "react";
import "./App.css";
import FormTodo from "./components/FormTodo";
import ListTodo from "./components/ListTodo";
import { v1 as uuidv4 } from "uuid";

function App() {
  const [listItems, setListItems] = useState([]);
  const [item, setItem] = useState("");
  const [itemDiscription, setItemDiscription] = useState("");
  const handelItem = (e) => {
    setItem(e.target.value);
  };

  const handelDiscription = (e) => {
    setItemDiscription(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    //console.log("submited");
    //console.log(item);

    if (item.length > 0) {
      const singelTodo = {
        id: uuidv4(),
        title: item,
        discription: itemDiscription,
      };
      setListItems([...listItems, singelTodo]);
    }
    setItem("");
    setItemDiscription("");
  };

  const handelDelete = (id) => {
    const newItems = listItems.filter((item) => {
      return item.id !== id;
    });
    setListItems(newItems);
  };

  const handelEdit = (title, discription, id) => {
    //console.log("edit");
    setItem(title);
    setItemDiscription(discription);
    const newItems = listItems.filter((i) => {
      return i.id !== id;
    });
    setListItems(newItems);
  };
  return (
    <div className="app">
      
      <div className="list-component">
        
        <FormTodo
          item={item}
          handelItem={handelItem}
          handelSubmit={handelSubmit}
          itemDiscription={itemDiscription}
          handelDiscription={handelDiscription}
        />
        <ListTodo
          listItems={listItems}
          handelDelete={handelDelete}
          handelEdit={handelEdit}
        />
      </div>
    </div>
  );
}

export default App;
