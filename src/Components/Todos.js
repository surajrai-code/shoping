import React, { useState } from "react";

const Todos = () => {
  const [inputs, setInputs] = useState();
  const [todo, setTodo] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const SubmitHandler = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updateText = [...todo];
      updateText[editIndex].content = inputs;
      setTodo(updateText);
      setEditIndex(null);
    } else {
      setTodo([...todo, { content: inputs, isChecked: false }]);
    }

    setInputs("");
  };

  const deleteHandler = (itemId) => {
    const update = todo.filter((_, id) => id !== itemId);
    setTodo(update);
    setEditIndex(null);
  };
  const toggle = (index) => {
    const newtext = [...todo];
    newtext[index].isChecked = !newtext[index].isChecked;
    setTodo(newtext);
    if (editIndex === index) {
      setEditIndex(null);
      setInputs("");
    }
  };
  const editItem = (index) => {
    if (!todo[index].isChecked) {
      setTodo(todo[index].content);
      setEditIndex(index);
    }
  };

  const itemCount = todo.length;
  return (
    <>
      <label>TodoList</label>
      <br></br>
      <input
        type="text"
        onChange={(e) => setInputs(e.target.value)}
        value={inputs}
        disabled={editIndex !== null && todo[editIndex]?.isChecked}
      />
      <button type="submit" onClick={SubmitHandler}>
        {editIndex !== null ? "update" : "submit"}
      </button>

      <div>
        {todo.map((item, id) => (
          <div key={id}>
          <input
              type="checkbox"
              checked={item.isChecked}
              onChange={() => toggle(id)}
              disabled={editIndex !== null && editIndex !== id}
            />
            {item.isChecked ? <hr /> : null}

            {editIndex === id ? (
              <input
                type="checkbox"
                value={inputs}
                onChange={(e) => setInputs(e.target.value)}
                disabled={item.isChecked}
              />
            ) : item.isChecked ? (
              <h2>
                <s>{item.content}</s>
              </h2>
            ) : (
              <h2>{item.content}</h2>
            )}
            <button
              disabled={
                item.isChecked || editIndex !== null || todo[id]?.isChecked
              }
              onClick={() => editItem(id)}
            >
              edit
            </button>
            <button onClick={() => deleteHandler(id)}>delete</button>
          </div>
        ))}
        
      </div>
      <p>Total item:{itemCount}</p>
    </>
  );
};

export default Todos;
