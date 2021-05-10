import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

// import logo from './logo.svg';
// import { Counter } from '@features/counter/Counter';
import Header from '@components/Header'
import Lobby from '@features/Lobby'
import Game from '@features/Game'
import { selecTables } from '@store/tablesSlice'
import './App.css';

function App() {
  const tables = useSelector(selecTables);
  console.log('app tables', tables)
  const { game, progress } = useSelector(
    ({tables}) => {
      return ({
        game: tables.tables[tables.currentGame],
        progress: tables.tables[tables.currentGame]?tables.tables[tables.currentGame].progress: undefined
      })
    }
  )

  return (
    <div className="App">
      <div className="header">
        <Header balance={tables.balance} />
      </div>
      <div className="content">
        <div className="left">
          <Lobby
            tables={tables}
          />
        </div>
        <div className="right">
          <Game
            game={game}
            progress={progress}
          />
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
