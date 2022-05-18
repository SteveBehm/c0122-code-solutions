import { useState, createContext, useContext } from "react";

const CounterContext = createContext();
export const useCounter = () => useContext(CounterContext);

function CounterContextProvider(props) {

  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1);
  }

  const decrementCount = () => {
    setCount(count - 1);
  }

  const value = {count, incrementCount, decrementCount};

  return (
    <CounterContext.Provider value={value}>
      {props.children}
    </CounterContext.Provider>
  )
}

export default CounterContextProvider;
