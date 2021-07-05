import React from 'react'
import Header from './components/HeaderComponent/Header';
import HeroList from './components/HeroListComponent/HeroList';
import './App.css'

function App() {
  return (
    <div className="App" style={{ }} >
      <header>
        <Header />
      </header>
      <main className="main-content">
        <HeroList />
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
