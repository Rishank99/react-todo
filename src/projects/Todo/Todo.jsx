import "./Todo.css";
import { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import {
  getLocalStorageTodoData,
  setLocalStorageTodoData,
} from "./TodoLocalStorage";
export const Todo = () => {
  useEffect(() => {
    document.title = "ToDo-LiSt";
  }, []);

  // 2

  // 5
  const [task, setTask] = useState(() => getLocalStorageTodoData());

  // 14

  // 3

  // 4
  const handleFormSubmit = (inputValue) => {
    //Destructuring inputValue object
    const { id, content, checked } = inputValue;
    // 6 To check if the input field is empty or not
    if (!content) return;

    // 8
    // if (task.includes(inputValue)) return;
    // 10 To check if the data is already existing or not
    // if (task.includes(inputValue)) {
    //   return;
    // }

    // To check if the data is already existing or not
    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    );
    if (ifTodoContentMatched) return;

    // 7
    setTask((prevTask) => [
      ...prevTask,
      { id: id, content: content, checked: checked },
    ]);

    // 9
  };

  setLocalStorageTodoData(task);

  // 13 For Date and Time
  // const date = new Date();
  // const formattedDate = date.toLocaleDateString();
  // const formattedTime = date.toLocaleTimeString();
  // 16

  // 18
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curElem) => {
      return curElem.content != value;
    });
    setTask(updatedTask);
  };

  // 20
  const handleClearTodoData = () => {
    setTask([]);
  };

  const handleCheckedTodo = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updatedTask);
  };

  // 1
  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        {/* 12 */}
        <TodoDate />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />
      {/* 11 */}
      <section className="myUnOrdList">
        <ul>
          {task.map((curTask) => {
            return (
              <TodoList
                key={curTask.id}
                curTask={curTask.content}
                checked={curTask.checked}
                onHandleDeleteTodo={handleDeleteTodo}
                onHandleCheckedTodo={handleCheckedTodo}
              />
            );
          })}
        </ul>
      </section>
      {/* 19 */}
      <section>
        <button className="clear-btn" onClick={handleClearTodoData}>
          Clear all
        </button>
      </section>
    </section>
  );
};
