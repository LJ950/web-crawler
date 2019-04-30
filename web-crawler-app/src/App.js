import React from 'react';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import UrlSearch from './components/UrlSearch.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <UrlSearch />
      <Footer />
    </div>
  );
}

export default App;
