import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import {Buffer} from 'buffer';
import {initContract} from "./shared/config/near";
window.Buffer = Buffer

window.nearInitPromise = initContract()
   .then(() => {
      const root = ReactDOM.createRoot(
         document.getElementById('root') as HTMLElement
      );

      root.render(
         <App />
      );
   })

reportWebVitals();
