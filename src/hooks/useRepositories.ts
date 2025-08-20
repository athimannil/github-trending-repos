import { useEffect, useState } from "react";
import { Repository } from "../types/index";

interface UseRepositoriesReturn {
  repos: Repository[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useRepositories = (): UseRepositoriesReturn => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRepositories = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch trending repos from last week
      const lastWeek = new Date();
      lastWeek.setDate(lastWeek.getDate() - 7);
      const dateString = lastWeek.toISOString().split("T")[0];

      const response = await fetch(
        `https://api.github.com/search/repositories?q=created:>${dateString}&sort=stars&order=desc&per_page=50`
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch repositories: ${response.status}`);
      }

      const data = await response.json();
      setRepos(data.items || []);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unknown error occurred";
      setError(errorMessage);
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return {
    repos,
    loading,
    error,
    refetch: fetchRepositories,
  };
};
