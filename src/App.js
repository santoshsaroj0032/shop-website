 

import React from 'react';
import Banner from './components/Banner/Banner';
import Categories from './components/Categories/Categories';
import StyleBook from './components/StyleBook/StyleBook';
import './App.css';

function App() {
  return (
    <div className="app">
      <Banner />
      <Categories />
      <StyleBook />
    </div>
  );
}

export default App;