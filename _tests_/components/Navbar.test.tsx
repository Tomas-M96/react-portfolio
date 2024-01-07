import { suite, test, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "../../src/components/Navbar";

import React from "react";
import { BrowserRouter } from "react-router-dom";

suite("Navbar.tsx Test Suite", () => {
  test("Happy Path: Renders the Navbar successfully", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(getByTestId("navbar")).toBeInTheDocument();
  });

  test("Happy Path: Should render the element with all buttons", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("About")).toBeInTheDocument();
    expect(getByText("Projects")).toBeInTheDocument();
    expect(getByText("Contact")).toBeInTheDocument();
  });

  test("Happy Path: Should render the element with all socials", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByTitle("github")).toBeInTheDocument();
    expect(screen.getByTitle("linkedin")).toBeInTheDocument();
  });

  test("Happy Path: Should toggle the theme when the button is clicked", () => {
    // Arrange
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    // Act
    const buttonElement = screen.getByTitle("dark-toggle");
    fireEvent.click(buttonElement);

    // Assert
    expect(document.documentElement).toHaveClass("dark");

    // Act
    fireEvent.click(buttonElement);

    // Assert
    expect(document.documentElement).not.toHaveClass("dark");
  });

  // When the button is clicked rapidly, the theme toggles correctly
  test("Edge Case: Should toggle the theme and element class correctly when the button is clicked rapidly", () => {
    // Arrange
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    // Act
    const buttonElement = screen.getByTitle("dark-toggle");
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
