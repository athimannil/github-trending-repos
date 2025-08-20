import { describe, it, expect, beforeEach, vi } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { useRepositories } from "./useRepositories";
import { mockApiResponse } from "../test/utils";

const mockFetch = vi.fn();
global.fetch = mockFetch;

describe("useRepositories", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("fetches repositories successfully", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockApiResponse,
    } as Response);

    const { result } = renderHook(() => useRepositories());

    expect(result.current.loading).toBe(true);
    expect(result.current.repos).toEqual([]);
    expect(result.current.error).toBe(null);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.repos).toEqual(mockApiResponse.items);
    expect(result.current.error).toBe(null);
  });

  it("handles fetch error correctly", async () => {
    mockFetch.mockRejectedValueOnce(new Error("Network error"));

    const { result } = renderHook(() => useRepositories());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.repos).toEqual([]);
    expect(result.current.error).toBe("Network error");
  });

  it("handles HTTP error response", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
    } as Response);

    const { result } = renderHook(() => useRepositories());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.repos).toEqual([]);
    expect(result.current.error).toBe("Failed to fetch repositories: 404");
  });

  it("refetches data when refetch is called", async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => mockApiResponse,
    } as Response);

    const { result } = renderHook(() => useRepositories());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(mockFetch).toHaveBeenCalledTimes(1);

    // Call refetch
    result.current.refetch();

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledTimes(2);
    });
  });

  it("calls GitHub API with correct parameters", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockApiResponse,
    } as Response);

    renderHook(() => useRepositories());

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalled();
    });

    const callUrl = mockFetch.mock.calls[0][0] as string;
    expect(callUrl).toContain("https://api.github.com/search/repositories");
    expect(callUrl).toContain("q=created:>");
    expect(callUrl).toContain("sort=stars");
    expect(callUrl).toContain("order=desc");
    expect(callUrl).toContain("per_page=50");
  });
});
