import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import test from "ava";
import { useState } from "react";

import Button from "./Button";

const ButtonCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Button onClick={() => setCount((count) => count + 1)}>Click Me</Button>
      <p role="paragraph">Count: {count}</p>
    </div>
  );
};

test("Button component should be clickable", (t) => {
  render(<ButtonCounter />);
  const button = screen.getByRole("button");
  const count = screen.getByRole("paragraph");
  t.is(count.textContent, "Count: 0");
  fireEvent.click(button);
  t.is(count.textContent, "Count: 1");
});

test.afterEach(cleanup);
