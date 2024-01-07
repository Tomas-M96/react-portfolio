import { render } from "@testing-library/react";
import React from "react";
import { expect, suite, test } from "vitest";
import ErrorPage from "../../src/pages/ErrorPage";

suite("ErrorPage.tsx Test Suite", () => {
  test("Happy Path: Renders the component", () => {
    render(<ErrorPage />);
    expect(document.getElementById("error-page")).toBeInTheDocument();
  });
});
