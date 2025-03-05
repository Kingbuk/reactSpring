import React from 'react';
import './App.css';
import data from 'mocks/latest-board-list.mock';
import latestBoardListMock from 'mocks/latest-board-list.mock';
import Top3Item from 'components/top3item';
import { top3BoardListMock } from 'mocks';

function App() {
  return (
  <>
    <div style={{display : 'flex', justifyContent:'center', gap : '24px'}}>
      {top3BoardListMock.map(top3ListItem => <Top3Item top3Listitem={top3ListItem}/>)}
    </div>
  </>
  );
}

export default App;
