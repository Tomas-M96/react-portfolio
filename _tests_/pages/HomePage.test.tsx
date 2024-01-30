import React from "react";

import { expect, suite, test } from "vitest";
import { render } from "@testing-library/react";
import HomePage from "../../src/pages/HomePage";

suite("HomePage.tsx Test Suite", () => {
  test("Happy Path: Renders the component", () => {
    render(<HomePage />);
    expect(document.getElementById("home-section")).toBeInTheDocument();
  });
});
