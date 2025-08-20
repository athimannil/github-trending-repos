import { describe, it, expect, beforeEach, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useStarredRepos from "./useStarredRepos";
import { mockRepository } from "../test/utils";

const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
  writable: true,
});

describe("useStarredRepos", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("initializes with empty starred repos when localStorage is empty", () => {
    localStorageMock.getItem.mockReturnValue(null);

    const { result } = renderHook(() => useStarredRepos());

    expect(result.current.starredRepos).toEqual([]);
    expect(result.current.isStarred(1)).toBe(false);
  });

  it("loads starred repos from localStorage on initialization", () => {
    const savedRepos = [mockRepository];
    localStorageMock.getItem.mockReturnValue(JSON.stringify(savedRepos));

    const { result } = renderHook(() => useStarredRepos());

    expect(result.current.starredRepos).toEqual(savedRepos);
    expect(result.current.isStarred(mockRepository.id)).toBe(true);
  });

  it("handles corrupted localStorage data gracefully", () => {
    localStorageMock.getItem.mockReturnValue("invalid-json");
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const { result } = renderHook(() => useStarredRepos());

    expect(result.current.starredRepos).toEqual([]);
    expect(consoleSpy).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });

  it("adds repository to starred repos", () => {
    localStorageMock.getItem.mockReturnValue(null);

    const { result } = renderHook(() => useStarredRepos());

    act(() => {
      result.current.toggleStar(mockRepository);
    });

    expect(result.current.starredRepos).toContain(mockRepository);
    expect(result.current.isStarred(mockRepository.id)).toBe(true);
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      "starred-repos",
      JSON.stringify([mockRepository])
    );
  });

  it("removes repository from starred repos", () => {
    localStorageMock.getItem.mockReturnValue(null);

    const { result } = renderHook(() => useStarredRepos());

    act(() => {
      result.current.toggleStar(mockRepository);
    });

    // Then remove it
    act(() => {
      result.current.toggleStar(mockRepository);
    });

    expect(result.current.starredRepos).not.toContain(mockRepository);
    expect(result.current.isStarred(mockRepository.id)).toBe(false);
    expect(localStorageMock.setItem).toHaveBeenLastCalledWith(
      "starred-repos",
      JSON.stringify([])
    );
  });

  it("correctly identifies starred repositories", () => {
    localStorageMock.getItem.mockReturnValue(null);

    const { result } = renderHook(() => useStarredRepos());

    expect(result.current.isStarred(mockRepository.id)).toBe(false);

    act(() => {
      result.current.toggleStar(mockRepository);
    });

    expect(result.current.isStarred(mockRepository.id)).toBe(true);
    expect(result.current.isStarred(999)).toBe(false); // Different ID
  });
});
