import { useState, useEffect } from "react";
import { Repository } from "../types/index";

const useStarredRepos = () => {
  const [starredRepos, setStarredRepos] = useState<Repository[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("starred-repos");
    if (stored) {
      try {
        setStarredRepos(JSON.parse(stored));
      } catch (error) {
        console.error(
          "Failed to parse starred repos from localStorage:",
          error
        );
        setStarredRepos([]);
      }
    }
  }, []);

  const toggleStar = (repo: Repository) => {
    setStarredRepos((prev) => {
      const isCurrentlyStarred = prev.some((starred) => starred.id === repo.id);
      const newStarredRepos = isCurrentlyStarred
        ? prev.filter((starred) => starred.id !== repo.id)
        : [...prev, repo];

      localStorage.setItem("starred-repos", JSON.stringify(newStarredRepos));
      return newStarredRepos;
    });
  };

  const isStarred = (repoId: number) => {
    return starredRepos.some((repo) => repo.id === repoId);
  };

  return {
    starredRepos,
    toggleStar,
    isStarred,
  };
};

export default useStarredRepos;
