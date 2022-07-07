import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders main menu", () => {
  render(<App />);
  const linkElement = screen.getByText(/rock paper scissors lizard spock/i);
  expect(linkElement).toBeInTheDocument();
});
