import React, { Component } from 'react';
import './App.css';

const Content = () => (
  <>
    <nav>Navigation</nav>
    <main>Main area</main>
  </>
)
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>Header</header>
        <Content />
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;
