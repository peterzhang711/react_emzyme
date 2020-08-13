import React from 'react';
import Header from './component/header'
import Headline from './component/headline'
import './App.scss'

const tempArr = [{
  fName: 'joe',
  lName: 'Peter',
  email: true
}]
function App() {
  return (
    <div className="App">
      <Header />
      <Headline header='lalala' tempArr={tempArr} desc='i love you'/>
    </div>
  );
}

export default App;
