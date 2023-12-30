import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import { suite, test, expect } from "vitest";
import "@testing-library/jest-dom";

import App from "../src/App";

import React from "react";

suite("App.tsx Test Suite", () => {
  test("Happy Path: App renders successfully", () => {
    render(<App />);
  });

  // Renders the Test Button successfully
  test("Happy Path: Should render the Test Button successfully", () => {
    const { getByText } = render(<App />);
    expect(getByText("Test Button")).toBeInTheDocument();
  });

  test('Happy Path: Should render an h1 element with the title "TEST"', () => {
    // Arrange
    render(<App />);

    // Act
    const h1Element = screen.getByRole("heading", { name: /TEST/i });

    // Assert
    expect(h1Element).toBeInTheDocument();
  });

  // Clicking the button toggles the theme between 'light' and 'dark'
  test("Happy Path: Should toggle the theme when the button is clicked", () => {
    // Arrange
    render(<App />);

    // Act
    const buttonElement = screen.getByRole("button", { name: /Test Button/i });
    fireEvent.click(buttonElement);

    // Assert
    expect(document.documentElement).toHaveClass("dark");

    // Act
    fireEvent.click(buttonElement);

    // Assert
    expect(document.documentElement).not.toHaveClass("dark");
  });

  // When the theme is 'dark', the document element has class 'dark'
  test('Happy Path: Should add "dark" class to the document element when the theme is "dark"', () => {
    // Arrange
    render(<App />);

    // Act
    const buttonElement = screen.getByRole("button", { name: /Test Button/i });
    fireEvent.click(buttonElement);

    // Assert
    expect(document.documentElement).toHaveClass("dark");
  });

  // When the button is clicked rapidly, the theme toggles correctly
  test("Edge Case: Should toggle the theme and element class correctly when the button is clicked rapidly", () => {
    // Arrange
    render(<App />);

    // Act
    const buttonElement = screen.getByRole("button", { name: /Test Button/i });
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);

    // Assert
    expect(document.documentElement).toHaveClass("dark");

    // Act
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);

    // Assert
    expect(document.documentElement).not.toHaveClass("dark");
  });
});
