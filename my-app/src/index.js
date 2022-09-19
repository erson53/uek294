import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import AddTask from './components/AddTask';
import ShowTask from './components/ShowTask';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />    
    <AddTask />
    <ShowTask />
  </React.StrictMode>
);