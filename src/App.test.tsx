import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Application", () => {
  it("should render page",async () => {
    render(<App />)

    expect(await screen.findByRole('heading')).toHaveTextContent('Vite + React')
  });
});
