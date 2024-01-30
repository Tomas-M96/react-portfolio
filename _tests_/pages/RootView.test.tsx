import { render, screen } from "@testing-library/react";
import { suite, test, expect } from "vitest";
import "@testing-library/jest-dom";

import RootView from "../../src/pages/RootView";

import React from "react";
import Navbar from "../../src/components/Navbar";
import { BrowserRouter } from "react-router-dom";

suite("RootView.tsx Test Suite", () => {
  test("Happy Path: App renders successfully", () => {
    render(
      <BrowserRouter>
        <RootView />
      </BrowserRouter>
    );
    expect(document.getElementById("root-view")).toBeInTheDocument();
  });

  test("Happy Path: Renders the Navbar successfully", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });
});
