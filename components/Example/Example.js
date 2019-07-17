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
      <p>
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
      </p>
      <button onClick={() => setCount(count + 1)}>
        <FormattedMessage
          id="components.Example.button"
          defaultMessage={`Click me`}
        />
      </button>
      <Counter />
      <DisplayDate date={date} />
    </section>
  );
};

export default Example;
