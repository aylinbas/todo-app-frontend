import { render, screen, cleanup } from "@testing-library/react";
import Todos from "./Todos";

test("should render Todos component", () => {
  render(<Todos />);
  const todoElement = screen.getByTestId("todo-element");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("Hello world!");
});
