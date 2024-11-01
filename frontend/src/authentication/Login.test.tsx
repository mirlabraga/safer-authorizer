import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login", () => {
  describe("when the user load the Login", () => {
    test("loading the page should be show the list of clinics", () => {
      render(<Login />);

      const titleSelectClinic = screen.getByLabelText("title-select-clinic");
      expect(titleSelectClinic).toBeDefined();
      expect(screen.getByRole("combobox")).toBeVisible();
    });
  });
});
