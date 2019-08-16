import React from 'react';
import './App.scss';
import { Nav } from './Nav'; 
import { Second } from './Second';
import { Third } from './third/Third';
import { Alert } from './Alert';
import { Keys } from './Keys';
import { NameForm } from './NameForm';

function App() {
  return (
    <div className="App">
    <Nav user="Kevin" />
    <Second />
    <Third  />
    <Alert text="George" />
    <Keys />
    <NameForm />

    </div>
  );
}

export default App;
