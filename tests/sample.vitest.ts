import { describe, expect, test } from "vitest";

const fn = () => "foo";

describe("test", (t) => {
  test("fn() returns foo", () => {
    expect(fn()).toBe("foo");
  });
});
