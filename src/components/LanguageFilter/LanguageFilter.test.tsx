import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "../../test/utils";
import LanguageFilter from "./LanguageFilter";

describe("LanguageFilter", () => {
  const mockOnLanguageChange = vi.fn();
  const mockLanguages = ["JavaScript", "TypeScript", "Python", "Go"];

  beforeEach(() => {
    mockOnLanguageChange.mockClear();
  });

  it("renders the language filter with label", () => {
    render(
      <LanguageFilter
        languages={mockLanguages}
        selectedLanguage="all"
        onLanguageChange={mockOnLanguageChange}
      />
    );

    expect(screen.getByText("Filter by Language:")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("displays all languages as options", () => {
    render(
      <LanguageFilter
        languages={mockLanguages}
        selectedLanguage="all"
        onLanguageChange={mockOnLanguageChange}
      />
    );

    expect(screen.getByDisplayValue("All Languages")).toBeInTheDocument();

    mockLanguages.forEach((language) => {
      expect(
        screen.getByRole("option", { name: language })
      ).toBeInTheDocument();
    });
  });

  it("shows correct selected value", () => {
    render(
      <LanguageFilter
        languages={mockLanguages}
        selectedLanguage="TypeScript"
        onLanguageChange={mockOnLanguageChange}
      />
    );

    expect(screen.getByDisplayValue("TypeScript")).toBeInTheDocument();
  });

  it("calls onLanguageChange when selection changes", () => {
    render(
      <LanguageFilter
        languages={mockLanguages}
        selectedLanguage="all"
        onLanguageChange={mockOnLanguageChange}
      />
    );

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "JavaScript" } });

    expect(mockOnLanguageChange).toHaveBeenCalledWith("JavaScript");
  });

  it("handles empty languages array", () => {
    render(
      <LanguageFilter
        languages={[]}
        selectedLanguage="all"
        onLanguageChange={mockOnLanguageChange}
      />
    );

    expect(screen.getByDisplayValue("All Languages")).toBeInTheDocument();
    expect(screen.getAllByRole("option")).toHaveLength(1); // Only "All Languages"
  });
});
