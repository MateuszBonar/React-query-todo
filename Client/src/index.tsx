import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClientProvider } from 'react-query';
import { QueryClient } from 'react-query';
import { ThemeProvider } from 'styled-components';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={{
        colors: {
          background: 'black',
          primary: 'tomato',
        },
        space: [ 0, 6, 12, 24, 48 ],
        fontSizes: [ 14, 16, 18, 20, 24 ],
        radii: {
          default: 12,
        }
      }}>

      <App />
      <ReactQueryDevtools position='bottom-right' />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();