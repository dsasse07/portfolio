import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BreakpointProvider } from './components/BreakpointProvider'
import reportWebVitals from './reportWebVitals';
import store from './store'
import { Provider } from 'react-redux'

const queries = {
  xs: '(max-width: 320px)',
  sm: '(max-width: 720px)',
  md: '(max-width: 1024px)',
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BreakpointProvider queries={queries}>
        <App />
      </BreakpointProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
