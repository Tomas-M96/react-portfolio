import { suite, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "../../src/components/HomePage";
import "@testing-library/jest-dom";

import React from "react";

suite("HomePage.tsx Test Suite", () => {
  test("Happy Path: Renders the component", () => {
    render(<HomePage />);
    expect(screen.getByTestId("home")).toBeInTheDocument();
  });

  test("Happy Path: Renders the h1 tags", () => {
    render(<HomePage />);
    expect(screen.getByText("Hi")).toBeInTheDocument();
    expect(screen.getByText("I'm Tomas Moore")).toBeInTheDocument();
    expect(screen.getByText("A Software Developer")).toBeInTheDocument();
  });

  test("Happy Path: Renders the download button", () => {
    render(<HomePage />);
    expect(screen.getByText("Download CV")).toBeInTheDocument();
  });
});
