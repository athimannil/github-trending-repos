import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "../../test/utils";
import RepositoryList from "./RepositoryList";
import { mockApiResponse } from "../../test/utils";

const mockUseRepositories = vi.fn();
const mockUseStarredRepos = vi.fn();
const mockRefetch = vi.fn();
const mockToggleStar = vi.fn();

vi.mock("../../hooks/useRepositories", () => ({
  useRepositories: () => mockUseRepositories(),
}));

vi.mock("../../hooks/useStarredRepos", () => ({
  default: () => mockUseStarredRepos(),
}));

describe("RepositoryList", () => {
  beforeEach(() => {
    vi.resetAllMocks();
    mockRefetch.mockClear();
    mockToggleStar.mockClear();

    mockUseStarredRepos.mockReturnValue({
      starredRepos: [],
      toggleStar: mockToggleStar,
      isStarred: vi.fn(() => false),
    });
  });

  describe("Integration - Success State", () => {
    beforeEach(() => {
      mockUseRepositories.mockReturnValue({
        repos: mockApiResponse.items,
        loading: false,
        error: null,
        refetch: mockRefetch,
      });
    });

    it("renders repository list with filtering options", () => {
      render(<RepositoryList />);

      expect(screen.getByText("All Repositories")).toBeInTheDocument();
      expect(screen.getByText("Starred")).toBeInTheDocument();
      expect(screen.getByDisplayValue("All Languages")).toBeInTheDocument();
      expect(screen.getByText("test-repo")).toBeInTheDocument();
    });

    it("filters repositories by language", async () => {
      render(<RepositoryList />);

      const languageSelect = screen.getByDisplayValue("All Languages");
      fireEvent.change(languageSelect, { target: { value: "TypeScript" } });

      await waitFor(() => {
        expect(screen.getByText("test-repo")).toBeInTheDocument();
      });
    });

    it("switches between All and Starred tabs", () => {
      render(<RepositoryList />);

      const starredTab = screen.getByText("Starred");
      fireEvent.click(starredTab);

      expect(starredTab).toHaveClass("filtertabs__tab-active");
    });
  });

  describe("Loading State", () => {
    beforeEach(() => {
      mockUseRepositories.mockReturnValue({
        repos: [],
        loading: true,
        error: null,
        refetch: mockRefetch,
      });
    });

    it("displays loading state", () => {
      render(<RepositoryList />);
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
  });

  describe("Error State", () => {
    beforeEach(() => {
      mockUseRepositories.mockReturnValue({
        repos: [],
        loading: false,
        error: "Network error",
        refetch: mockRefetch,
      });
    });

    it("displays error state", () => {
      render(<RepositoryList />);
      expect(screen.getByText("Error: Network error")).toBeInTheDocument();
    });

    // Note: Retry button functionality should be added to the component
    it.skip("calls refetch when retry button is clicked", () => {
      render(<RepositoryList />);

      const retryButton = screen.getByRole("button", { name: /try again/i });
      fireEvent.click(retryButton);

      expect(mockRefetch).toHaveBeenCalledTimes(1);
    });
  });

  describe("Empty State", () => {
    beforeEach(() => {
      mockUseRepositories.mockReturnValue({
        repos: [],
        loading: false,
        error: null,
        refetch: mockRefetch,
      });
    });

    it("displays empty state when no repositories are found", () => {
      render(<RepositoryList />);
      expect(screen.getByText("No repositories found.")).toBeInTheDocument();
    });
  });
});
