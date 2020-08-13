import React from 'react';
import Header from './component/header'
import Headline from './component/headline'
import './App.scss'


function App() {
  return (
    <div className="App">
      <Header />
      <Headline header='Posts' desc='i love you'/>
    </div>
  );
}

export default App;
