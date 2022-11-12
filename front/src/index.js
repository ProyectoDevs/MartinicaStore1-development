import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
<<<<<<< HEAD
import { positions, transitions, Provider as AlertProvider } from 'react-alert';
=======
import { positions, transitions, Provider as AlertProvider} from 'react-alert';
>>>>>>> jules
import AlertTemplate from 'react-alert-template-basic';

const options = {
  timeout: 3000,
<<<<<<< HEAD
  position: positions.TOP_RIGHT,
=======
  position: positions.BOTTOM_CENTER,
>>>>>>> jules
  transition: transitions.SCALE
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
<<<<<<< HEAD
      <App />
=======
    <App />
>>>>>>> jules
    </AlertProvider>
  </Provider>
);

