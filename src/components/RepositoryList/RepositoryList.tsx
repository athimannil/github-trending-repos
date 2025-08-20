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
  const { toggleStar, isStarred, starredRepos } = useStarredRepos();
  const { repos, loading, error, refetch } = useRepositories();

  const allRepos = selectedTab === "all" ? repos : starredRepos;
  const languages = Array.from(
    new Set(
      allRepos.map(({ language }) => language).filter(Boolean) as string[]
    )
  ).sort();

  const filteredRepos = allRepos.filter((repo) => {
    const matchesLanguage =
      selectedLanguage === "all" || repo.language === selectedLanguage;
    return matchesLanguage;
  });

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
                onToggleStar={() => toggleStar(repo)}
              />
            ))}
          </section>
        ) : (
          !loading && <p>No repositories found.</p>
        )}
      </main>
    </Container>
  );
};
export default RepositoryList;
