import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
export const Keys = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!inputValue) return;

    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }
    setTask((prevTask) => [inputValue, ...prevTask]);
    setInputValue("");
  };
  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
      </header>
      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={(event) => handleInputChange(event.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              Add Task
            </button>
          </div>
        </form>
      </section>
      <section className="myUnOrdList">
        <ul>
          {task.map((curElem, index) => {
            return <TodoLists key={index} data={curElem} />;
          })}
        </ul>
      </section>
    </section>
  );
};

const TodoLists = ({ data }) => {
  return (
    <li>
      <span>{data}</span>
      <input type="text" />
      <button className="delete-btn">
        <MdDeleteForever />
      </button>
    </li>
  );
};
