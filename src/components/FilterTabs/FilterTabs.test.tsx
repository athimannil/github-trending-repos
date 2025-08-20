import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "../../test/utils";
import FilterTabs from "./FilterTabs";

describe("FilterTabs", () => {
  const mockOnTabChange = vi.fn();

  beforeEach(() => {
    mockOnTabChange.mockClear();
  });

  it("renders both tab buttons", () => {
    render(<FilterTabs selectedTab="all" onTabChange={mockOnTabChange} />);

    expect(screen.getByText("All Repositories")).toBeInTheDocument();
    expect(screen.getByText("Starred")).toBeInTheDocument();
  });

  it("shows correct active state for 'all' tab", () => {
    render(<FilterTabs selectedTab="all" onTabChange={mockOnTabChange} />);

    const allTab = screen.getByText("All Repositories");
    const starredTab = screen.getByText("Starred");

    expect(allTab).toHaveClass("filtertabs__tab-active");
    expect(starredTab).not.toHaveClass("filtertabs__tab-active");
  });

  it("shows correct active state for 'starred' tab", () => {
    render(<FilterTabs selectedTab="starred" onTabChange={mockOnTabChange} />);

    const allTab = screen.getByText("All Repositories");
    const starredTab = screen.getByText("Starred");

    expect(starredTab).toHaveClass("filtertabs__tab-active");
    expect(allTab).not.toHaveClass("filtertabs__tab-active");
  });

  it("calls onTabChange when All Repositories tab is clicked", () => {
    render(<FilterTabs selectedTab="starred" onTabChange={mockOnTabChange} />);

    const allTab = screen.getByText("All Repositories");
    fireEvent.click(allTab);

    expect(mockOnTabChange).toHaveBeenCalledWith("all");
  });

  it("calls onTabChange when Starred tab is clicked", () => {
    render(<FilterTabs selectedTab="all" onTabChange={mockOnTabChange} />);

    const starredTab = screen.getByText("Starred");
    fireEvent.click(starredTab);

    expect(mockOnTabChange).toHaveBeenCalledWith("starred");
  });
});
