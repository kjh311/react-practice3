import React from 'react';
import './App.scss';
import { Nav } from './Nav'; 
import { Second } from './Second';
import { Third } from './third/Third';

function App() {
  return (
    <div className="App">
    <Nav user="Kevin" />
    <Second />
    <Third  />

    </div>
  );
}

export default App;
