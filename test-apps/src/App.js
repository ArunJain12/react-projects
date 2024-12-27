import './App.css';
import PaginationTestApp from './components/1.pagination/test';
import DigitalClock from './components/2.digital-clock';
import CountDownTimerTest from './components/3.countdown-timer/test';

function App() {
  return (
    <div className="App">
      <h1 className='title'>25 React JS Interview Projects</h1>
      <PaginationTestApp />
      <DigitalClock />
      <CountDownTimerTest />
    </div>
  );
}

export default App;
