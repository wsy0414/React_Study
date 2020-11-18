import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {reducer} from './redux/reducers';

const store = createStore(reducer);

console.log(store, store.getState());



ReactDOM.render(  
    <App store = {store}/>,
  document.getElementById('root')
);

//store中狀態變換就執行function
store.subscribe(function(){
  ReactDOM.render(  
    <App store = {store}/>,
  document.getElementById('root')
);}
);
