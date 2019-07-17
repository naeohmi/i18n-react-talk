//https://reactjs.org/docs/hooks-reference.html#usecontext
import React, { useReducer } from "react";
import { FormattedMessage } from "react-intl";

const Counter = props => {
  const initialState = { counter: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { counter: state.counter + 1 };
      case "decrement":
        return { counter: state.counter - 1 };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { counter } = state;
  return (
    <p>
      <FormattedMessage
        id="components.Counter.count"
        defaultMessage={`
          Counter:  
          {counter, number}
        `}
        values={{ counter }}
      />
      <br />
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </p>
  );
};

export default Counter;
