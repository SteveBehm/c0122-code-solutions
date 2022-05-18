import { useCounter } from '../contexts/CounterContext';

function ComponentB() {

  const { incrementCount } = useCounter()

  return (
    <div style={{ backgroundColor: 'red' }}>
      <button onClick={incrementCount}>Increase Count</button>
    </div>
  )
}

export default ComponentB;
