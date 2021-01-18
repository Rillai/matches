import './App.css';
import { Header } from './components/header';
import { Matches } from './components/pages/matches';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='app-content container'>
        <Matches />
      </div>
    </div>
  );
}

export default App;
