import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import logo from './logo.svg';
// import { Counter } from '@features/counter/Counter';
import Header from '@components/header'
import Lobby from '@features/lobby'
import Game from '@features/game'
import { selecTables } from '@store/tablesSlice'
import game from '@features/game'
import './App.css';

function App() {
  const tables = useSelector(selecTables);
  console.log('app tables', tables)
  return (
    <div className="App">
      <div className="header">
        <Header balance={123} />
      </div>
      <div className="content">
        <div className="left">
          <Lobby
            tables={tables}
          />
        </div>
        <div className="right">
          <Game/>
        </div>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header> */}
    </div>
  );
}

export default App;
