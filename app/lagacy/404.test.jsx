import { cleanup, render, screen } from "@testing-library/react";
import test from "ava";

import NotFoundPage from "./404";

test("404 page should be rendered", (t) => {
  render(<NotFoundPage />);
  const heading = screen.getByRole("heading");
  t.is(heading.textContent, "404: Not found");
});

test.afterEach(cleanup);
