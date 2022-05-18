import './styles.css';
import MyCounter from './components/MyCounter';
import ComponentA from './components/ComponentA';
import CounterContextProvider from './contexts/CounterContext';

function App() {

  return (
    <CounterContextProvider>
      <div className='app'>
        <div className='middle'>
          <h1>Context API</h1>
          <div className='flag'>
            <div class="left-top"></div>
            <div class="right-top"></div>
            <div class="horizontal-line"></div>
            <div class="left-bottom"></div>
            <div class="right-bottom"></div>
          </div>
          <MyCounter />
        </div>
        <ComponentA />
    </div>
    </CounterContextProvider>
  )
}

export default App;
