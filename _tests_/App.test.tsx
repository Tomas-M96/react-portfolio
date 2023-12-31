import { render, screen } from "@testing-library/react";
import { suite, test, expect } from "vitest";
import "@testing-library/jest-dom";

import App from "../src/App";

import React from "react";
import Navbar from "../src/components/Navbar";

suite("App.tsx Test Suite", () => {
  test("Happy Path: App renders successfully", () => {
    render(<App />);
    expect(screen.getByTestId("app")).toBeInTheDocument();
  });

  test("Happy Path: Renders the Navbar successfully", () => {
    render(<Navbar />);

    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });
});
