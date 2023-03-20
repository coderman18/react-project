import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


let rerenderEntireTree = (state) => {

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
}

// let rerenderEntireTree = (state) => {
//   ReactDOM.render(
  
//     <BrowserRouter>
//        <App state={state} 
//             dispatch={store.dispatch.bind(store)} store={store}/>
//     </BrowserRouter>, document.getElementById('root'));
// };



rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
