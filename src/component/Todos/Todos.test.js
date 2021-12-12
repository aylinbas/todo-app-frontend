import { render, screen, cleanup } from "@testing-library/react";
import Todos from "./Todos";

test("should render Todos component", () => {
  render(<Todos />);
  const todoElement = screen.getByTestId("todo-element");
  expect(todoElement).toBeInTheDocument();
  const todoTitle = screen.getByTestId("todo-title");
  expect(todoTitle).toBeInTheDocument();
  expect(todoTitle).toHaveTextContent("Add New Todo");
});
