import React from 'react';
import Provider from './context/Provider';
import './App.css';
import PokeTable from './components/PokeTable';
import PokeInput from './components/PokeInputs'

function App() {
  return (
    <Provider>
      <PokeInput />
      <PokeTable />
    </Provider>
  );
}

export default App;
