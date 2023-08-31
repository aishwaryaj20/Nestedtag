// src/App.js
import React from 'react';
import Tag from './component/Tag.jsx';
const tags = [
  {
    id: 1,
    name: 'root',
    children: [
      {
        id: 2,
        name: 'child1',
        children: [
          {
            id: 3,
            //name: 'Tag 1.1.1',
            name: 'child1-child1', data: "c1-c1 Hello",
            //name1: 'child2-child2', data: "c2-c2 Hello",
            children: [],
          },
        ],
      },
      {
        id: 4,
        name: 'child2-child2', data: "c2-c2 Hello",
        children: [],
      },
    ],
  },
  {
    id: 5,
    name: 'Child 2',
    children: [],
  },
];

function App() {
  return (
    <div className="App">
      <h1>Nested Tags Tree</h1>
      <Tag tags={tags} />
    </div>
  );
}

export default App;
