import React from 'react';
import './App.scss';
import { Nav } from './Nav'; 
import { Second } from './Second';
import { Third } from './third/Third';
import { Alert } from './Alert';
import { Keys } from './Keys';

function App() {
  return (
    <div className="App">
    <Nav user="Kevin" />
    <Second />
    <Third  />
    <Alert text="George" />
    <Keys />

    </div>
  );
}

export default App;
