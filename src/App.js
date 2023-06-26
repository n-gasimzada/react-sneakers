import React from 'react';
import Home from './components/pages/Home';
import { Routes, Route } from 'react-router-dom';
import Bookmarks from './components/pages/BookMarks';
import MyPurchases from './components/pages/MyPurchases';

function App() {
  return (
    <Routes>
     <Route path='/' element={ <Home /> } />
     <Route path='/bookmarks' element={ <Bookmarks />} />
     <Route path='/mypurchases' element={ <MyPurchases />} />
    </Routes>
  );
}

export default App;
