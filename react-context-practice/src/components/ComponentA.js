import { useCounter } from '../contexts/CounterContext';
import ComponentB from './ComponentB';

function ComponentA() {

  const {count} = useCounter();

  return (
    <div className='center'>
      <div className='width-md' style={{ backgroundColor: 'wheat' }}>
        <p>Count: {count}</p>
        <ComponentB />
      </div>
    </div>
  )
}

export default ComponentA;
