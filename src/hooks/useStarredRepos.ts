import { useState, useEffect } from "react";

const useStarredRepos = () => {
  const [starredRepos, setStarredRepos] = useState<number[]>([]);

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

  const toggleStar = (repoId: number) => {
    setStarredRepos((prev) => {
      const newStarredRepos = prev.includes(repoId)
        ? prev.filter((id) => id !== repoId)
        : [...prev, repoId];

      localStorage.setItem("starred-repos", JSON.stringify(newStarredRepos));
      return newStarredRepos;
    });
  };

  const isStarred = (repoId: number) => {
    return starredRepos.includes(repoId);
  };

  return {
    starredRepos,
    toggleStar,
    isStarred,
  };
};

export default useStarredRepos;
