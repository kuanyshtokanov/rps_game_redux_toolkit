import React from 'react';
import { useSelector } from 'react-redux'

import Header from '@components/Header'
import Lobby from '@features/Lobby'
import Game from '@features/Game'
import { selecTables } from '@store/tablesSlice'
import './App.css';

function App() {
  const tables = useSelector(selecTables);

  const { game } = useSelector(
    ({tables}) => {
      return ({
        game: tables.tables[tables.currentGame],
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
            gameId={game? game.gameId : null}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
