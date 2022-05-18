import {useCounter} from '../contexts/CounterContext';

function MyCounter() {

  const { count, incrementCount, decrementCount } = useCounter();

  return (
    <div className='counter'>
      <div>
        <h3>Counter Component</h3>
      </div>
      <div>
        <p>Count is: {count}</p>
      </div>
      <button onClick={decrementCount}>Decrease Count</button>
      <button onClick={incrementCount}>Increase Count</button>
    </div>
  )
}
export default MyCounter;
