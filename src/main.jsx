import React from 'react'
import ReactDOM from 'react-dom/client'
import QuizFunnel from './components/QuizFunnel'
import QuizStructure from './components/QuizStructure'
import './index.css'

// Simple routing based on pathname
const App = () => {
  const path = window.location.pathname;

  if (path === '/structure' || path === '/structure/') {
    return <QuizStructure />;
  }

  return <QuizFunnel />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
