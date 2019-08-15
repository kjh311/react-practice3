import React from 'react';
import './App.scss';
import { Nav } from './Nav'; 
import { Second } from './Second';
import { Third } from './third/Third';
import { Alert } from './Alert';

function App() {
  return (
    <div className="App">
    <Nav user="Kevin" />
    <Second />
    <Third  />
    <Alert text="George" />

    </div>
  );
}

export default App;
