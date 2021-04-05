import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import Launcher from './core/Launcher/Launcher';

ReactDOM.render(
  <React.StrictMode>
    <Launcher>
      <App />
    </Launcher>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
