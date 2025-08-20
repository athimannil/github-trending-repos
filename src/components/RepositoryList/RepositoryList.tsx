import { useEffect, useState } from "react";
import Container from "../Container/Container";
import RepoCard from "../RepoCard/RepoCard";
import LanguageFilter from "../LanguageFilter/LanguageFilter";
import { useRepositories } from "../../hooks/useRepositories";
import useStarredRepos from "../../hooks/useStarredRepos";

import "./RepositoryList.css";
import FilterTabs from "../FilterTabs/FilterTabs";

const RepositoryList = () => {
  const [selectedTab, setSelectedTab] = useState<"all" | "starred">("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const { starredRepos, toggleStar, isStarred } = useStarredRepos();
  const { repos, loading, error, refetch } = useRepositories();

  console.log("--------------------------------");
  console.log(repos, loading, error);

  const languages = Array.from(
    new Set(repos.map(({ language }) => language).filter(Boolean) as string[])
  ).sort();

  console.log("--------------------------------");
  console.log("Languages:", selectedLanguage);

  const filteredRepos = repos.filter(
    (repo) => selectedLanguage === "all" || repo.language === selectedLanguage
  );

  return (
    <Container className="main" size="xl">
      <div className="repofilter">
        <FilterTabs selectedTab={selectedTab} onTabChange={setSelectedTab} />
        <LanguageFilter
          languages={languages}
          selectedLanguage={selectedLanguage}
          onLanguageChange={setSelectedLanguage}
        />
      </div>

      <main>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {filteredRepos && filteredRepos.length > 0 ? (
          <section className="repository-list">
            {filteredRepos.map((repo) => (
              <RepoCard
                repo={repo}
                key={repo.id}
                isStarred={isStarred(repo.id)}
                onToggleStar={() => toggleStar(repo.id)}
              />
            ))}
          </section>
        ) : (
          !loading && <p>No repositories found.</p>
        )}
        <button onClick={refetch}>Refetch Repositories</button>
      </main>
    </Container>
  );
};
export default RepositoryList;
