import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App({ list1, list2, list3 }) {
  return (
    <>
      <h1>React Price card</h1>
    <div id="container">
      <div id="list1">
        <h6>FREE</h6>
        <h1>$0/month</h1>
        <hr></hr>
        <ul>
          {list1.map((list) => (
            <li key={list.id}>
              {list.important ? <p>✓ {list.content}</p> : <p style={{ color: 'lightgrey' }}>× {list.content}</p>}
            </li>
          ))}
        </ul>
        <button disabled>BUTTON</button>
      </div>
      <div id="list2">
        <h6>PLUS</h6>
        <h1>$9/month</h1>
        <hr></hr>
        <ul>
        {list2.map((list) => (
            <li key={list.id}>
              {list.important ? <p>✓ {list.content}</p> : <p style={{ color: 'lightgrey' }}>× {list.content}</p>}
            </li>
          ))}
        </ul>
        <button disabled>BUTTON</button>
      </div>
      <div id="list3">
        <h6>PRO</h6>
        <h1>$49/month</h1>
        <hr></hr>
        <ul>
        {list3.map((list) => (
            <li key={list.id}>
              {list.important ? <p>✓ {list.content}</p> : <p style={{ color: 'lightgrey' }}>× {list.content}</p>}
            </li>
          ))}
        </ul>
        <button type="submit"><a href='#'>BUTTON</a></button>
      </div>
      </div>
    </>
  );
}

export default App;