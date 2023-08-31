// src/components/TagView.js
import React from 'react';
// { useState } from 'react';
//import { CCollapse } from "react-bootstrap";
//import '@coreui/coreui/dist/css/coreui.min.css';
//import { CCollapse } from '@coreui/bootstrap-react'
import { useState } from "react";


import "./tag.css"
const Tag = ({ tags }) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    
    setInputText(e.target.value);
  };

  return (
    <ul>
    
      {tags.map((tag) => (
        <li key={tag.id}>

          <button className="rootbtn">{tag.name}</button>
               <input type="text" onChange={handleChange} value={inputText} />
          <p> {inputText}</p>

          <p className="pdata">{tag.data}</p>
          {tag.children.length > 0 && <Tag tags={tag.children} />}
        </li>
      ))}
     
    </ul>
  
  );
};

export default Tag;
