import React from 'react';
import Provider from './context/Provider';
import './App.css';
import PokeTable from './components/PokeTable';

function App() {
  return (
    <Provider>
      <PokeTable />
    </Provider>
  );
}

export default App;
