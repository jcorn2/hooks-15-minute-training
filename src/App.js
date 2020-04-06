import React, { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([
    { text: "Learn JavaScript", done: false },
    { text: "Learn React", done: false },
    { text: 'Read more on hooks', done: false},
    { text: "Play around in JSFiddle", done: true },
    { text: "Build something awesome", done: true }
  ]);
  const [normalOrder, setNormalOrder] = useState(true);

  const sort = () => {
    setItems((prevItems) => {
      const newItems = prevItems.slice().sort((a, b) => a.text < b.text);
      if (normalOrder) {
        newItems.reverse();
      }
      return newItems;
    });
    setNormalOrder((prevNormalOrder) => !prevNormalOrder);
  };

  useEffect(() => {
    alert(`Your first task is ${items[0].text}`);
  }, [items]);

  return (
    <div>
      <h2>Todos:</h2>
      <ol>
        {items.map(item => (
          <li key={item.id}>
            <label>
              <input type="checkbox" disabled readOnly checked={item.done} /> 
              <span className={item.done ? "done" : ""}>{item.text}</span>
            </label>
          </li>
        ))}
      </ol>
      <button onClick={sort}>Sort</button>
  </div>
  );
}

export default App;
