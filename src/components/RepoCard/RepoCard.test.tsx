import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "../../test/utils";
import RepoCard from "./RepoCard";
import { mockRepository } from "../../test/utils";
import { RepositoryCardData } from "../../types/index";

const mockRepoCardData: RepositoryCardData = {
  id: mockRepository.id,
  name: mockRepository.name,
  full_name: mockRepository.full_name,
  description: mockRepository.description,
  html_url: mockRepository.html_url,
  stargazers_count: mockRepository.stargazers_count,
  language: mockRepository.language,
  created_at: mockRepository.created_at,
  updated_at: mockRepository.updated_at,
  homepage: mockRepository.homepage,
  topics: mockRepository.topics,
  forks_count: mockRepository.forks_count,
  open_issues_count: mockRepository.open_issues_count,
  license: mockRepository.license,
  owner: {
    login: mockRepository.owner.login,
    avatar_url: mockRepository.owner.avatar_url,
    html_url: mockRepository.owner.html_url,
  },
};

describe("RepoCard", () => {
  const mockToggleStar = vi.fn();

  beforeEach(() => {
    mockToggleStar.mockClear();
  });

  it("renders repository information correctly", () => {
    render(
      <RepoCard
        repo={mockRepoCardData}
        isStarred={false}
        onToggleStar={mockToggleStar}
      />
    );

    expect(screen.getByText("test-repo")).toBeInTheDocument();
    expect(
      screen.getByText("A test repository for testing purposes")
    ).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("42")).toBeInTheDocument(); // stars count
  });

  it("shows correct star button when not starred", () => {
    render(
      <RepoCard
        repo={mockRepoCardData}
        isStarred={false}
        onToggleStar={mockToggleStar}
      />
    );

    const starButton = screen.getByRole("button");
    expect(starButton).toBeInTheDocument();
    expect(starButton).not.toHaveClass("repocard__star-button--starred");
  });

  it("shows correct star button when starred", () => {
    render(
      <RepoCard
        repo={mockRepoCardData}
        isStarred={true}
        onToggleStar={mockToggleStar}
      />
    );

    const starButton = screen.getByRole("button");
    expect(starButton).toBeInTheDocument();
    expect(starButton).toHaveClass("repocard__star-button--starred");
  });

  it("calls onToggleStar when star button is clicked", () => {
    render(
      <RepoCard
        repo={mockRepoCardData}
        isStarred={false}
        onToggleStar={mockToggleStar}
      />
    );

    const starButton = screen.getByRole("button");
    fireEvent.click(starButton);

    expect(mockToggleStar).toHaveBeenCalledTimes(1);
  });

  it("renders repository link with correct href", () => {
    render(
      <RepoCard
        repo={mockRepoCardData}
        isStarred={false}
        onToggleStar={mockToggleStar}
      />
    );

    const repoLink = screen.getByRole("link");
    expect(repoLink).toHaveAttribute(
      "href",
      "https://github.com/testuser/test-repo"
    );
    expect(repoLink).toHaveAttribute("target", "_blank");
    expect(repoLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders owner information correctly", () => {
    render(
      <RepoCard
        repo={mockRepoCardData}
        isStarred={false}
        onToggleStar={mockToggleStar}
      />
    );

    expect(screen.getByText("testuser")).toBeInTheDocument();
    const avatar = screen.getByRole("img", { name: /testuser/i });
    expect(avatar).toHaveAttribute(
      "src",
      "https://avatars.githubusercontent.com/u/1?v=4"
    );
  });

  it("handles repository without description gracefully", () => {
    const repoWithoutDescription = {
      ...mockRepoCardData,
      description: null,
    };

    render(
      <RepoCard
        repo={repoWithoutDescription}
        isStarred={false}
        onToggleStar={mockToggleStar}
      />
    );

    expect(screen.getByText("No description available")).toBeInTheDocument();
  });

  it("handles repository without language gracefully", () => {
    const repoWithoutLanguage = {
      ...mockRepoCardData,
      language: null,
    };

    render(
      <RepoCard
        repo={repoWithoutLanguage}
        isStarred={false}
        onToggleStar={mockToggleStar}
      />
    );

    expect(screen.queryByText("TypeScript")).not.toBeInTheDocument();
  });
});
