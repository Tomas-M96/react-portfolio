import { render } from "@testing-library/react";
import { suite, test, expect } from "vitest";
import "@testing-library/jest-dom";

import App from "../src/App";

import React from "react";

suite("App", () => {
  test("Happy Path: App renders successfully", () => {
    render(<App />);
  });

  // Renders the Test Button successfully
  test("should render the Test Button successfully", () => {
    const { getByText } = render(<App />);
    expect(getByText("Test Button")).toBeInTheDocument();
  });
});
