import { addFive } from "./functions";

test("adds 5 to a number", () => {
  expect(addFive(2)).toBe(7);
});
