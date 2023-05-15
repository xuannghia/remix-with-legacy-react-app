import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { useState } from "react";
import { beforeEach, describe, expect, test } from "vitest";

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

describe("<Button />", () => {
  beforeEach(() => {
    cleanup();
  });
  test("Button component should be clickable", (t) => {
    render(<ButtonCounter />);
    const button = screen.getByRole("button");
    const count = screen.getByRole("paragraph");
    expect(count.textContent, "Count: 0");
    fireEvent.click(button);
    expect(count.textContent, "Count: 1");
  });
});
