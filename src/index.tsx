import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ChakraProvider, defaultSystem, Theme } from '@chakra-ui/react';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ChakraProvider value={defaultSystem}>
      <Theme appearance='dark' hasBackground={false}>
        <App />
      </Theme>
    </ChakraProvider>
  </React.StrictMode>
);

