import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';




// lets create the store objects

// let store = createStore();
let rootReducer = (oldState = 'ANKIT', action) => {

  let newState = oldState;
  if (action.type === 'good morning') {
    newState = action.data
    return newState;
  }

  return newState;
}

let store = createStore(rootReducer)

store.subscribe(() => { console.log('NEW DATA IS', store.getState()) })

store.dispatch({ type: 'good morning', data: 'tanwar' })

//console.log(store)

export let storeData = createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <storeData.Provider value={store}>
      <App />

    </storeData.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
