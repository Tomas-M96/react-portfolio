import { suite, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HomeContent from "../../src/components/HomeContent";
import "@testing-library/jest-dom";

import React from "react";

suite("HomePage.tsx Test Suite", () => {
  test("Happy Path: Renders the component", () => {
    render(<HomeContent />);
    expect(screen.getByTestId("home")).toBeInTheDocument();
  });

  test("Happy Path: Renders the h1 tags", () => {
    render(<HomeContent />);
    expect(screen.getByText("Hi")).toBeInTheDocument();
    expect(screen.getByText("I'm Tomas Moore")).toBeInTheDocument();
    expect(screen.getByText("A Software Developer")).toBeInTheDocument();
  });

  test("Happy Path: Renders the download button", () => {
    render(<HomeContent />);
    expect(screen.getByText("Download CV")).toBeInTheDocument();
  });
});
