import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  var storedTodo = JSON.parse(localStorage.getItem("todo")) || []; //geting from localstorage

  let [todo, setTodo] = useState(storedTodo);
  const [message, setMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]); //saving in local storage

  const handleInput = () => {
    let texts = document.querySelector("#noteinput").value.trim();
    let inList = todo.includes(texts);
    if (inList) {
      setMessage("Task is already in todo list");
      document.querySelector("#noteinput").value = "";
    } else {
      setMessage("");
      setTodo(todo => [...todo, texts]);
      document.querySelector("#noteinput").value = "";
    }
  };

  const delItem = e => {
    let del = todo.filter(todo => {
      return todo !== e.target.value;
    });
    setTodo(del);
  }; //filter function takes my array and return all items which are not equal to e.target.value
  return (
    <div className="App container-fluid">
      <div className="row mt-5" />
      <div className="row">
        <div className="col-lg-4 col-md-2" />
        <div className="input-group col-lg-4 col-md-7 col-sm-3 col-xs-4 ">
          <input
            type="text"
            id="noteinput"
            className="form-control "
            placeholder="Enter a new note"
          />
          <div className="input-group-append">
            <button className="btn btn-outline-success" onClick={handleInput}>
              Add note
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-5 col-md-2 col-sm-1 " />
        <div className="col-lg-3 col-md-2 col-sm-1 ">
          <p className="message text-danger center">{message}</p>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-lg-3 col-md-2 col-sm-1" />

        <table className="table table-borderless col-lg-8 col-md-9 md-offset-2 col-sm-7 col-xs-4 ">
          <thead>
            <tr>
              <th scope="col ">Task</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          {todo.map(data => (
            <tr key={data}>
              <td>{data}</td>
              <td>
                {" "}
                <button
                  className="btn btn-danger"
                  value={data}
                  onClick={delItem}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default App;
