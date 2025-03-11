import React from 'react';
import latestBoardListMock from 'mocks/latest-board-list.mock';
import Top3Item from 'components/top3item';
import CommentItem from 'components/CommentItem';
import FavoriteItem from 'components/favoriteItem';
import { commentListMock, favoriteListMock, top3BoardListMock } from 'mocks';
import './App.css';
import InputBox from 'components/inputBox';

function App() {
  return (
  <>
    <div style={{display:'flex', flexDirection:'column', columnGap:'30px', rowGap:'20px'}}>
      
      <InputBox />
    </div>
  </>
  );
}

export default App;
