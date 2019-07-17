//https://reactjs.org/docs/hooks-effect.html
import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import Counter from '../Counter';
import DisplayDate from '../DisplayDate';

const Example = props => {
  const [date, setDate] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setDate(new Date().getTime());
  });

  return (
    <section>
      <div className="component">
        <i>Click Count Example:</i>
        <FormattedMessage
          id="components.Example.click"
          defaultMessage={`
            You clicked:
            {count, number}
            {count, plural,
              =0 {0 times}
              one {time}
              other {times}
            }
          `}
          values={{ count }}
        />
      <button onClick={() => setCount(count + 1)} className="click-button">
        <FormattedMessage
          id="components.Example.button"
          defaultMessage={`Click me`}
        />
      </button>
      </div>
      <DisplayDate date={date} />
      <Counter />
    </section>
  );
};

export default Example;
