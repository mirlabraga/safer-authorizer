import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  describe("when the user load the App", () => {
    test("loading the page should be show the list of clinics", () => {
      render(<App />);
      screen.getByTestId("router-element");
    });
  });
});
