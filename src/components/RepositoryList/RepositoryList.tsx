import { useEffect, useState } from "react";
import Container from "../Container/Container";

// import { Repository } from "../../types/index";

import { useRepositories } from "../../hooks/useRepositories";
import RepoCard from "../RepoCard/RepoCard";

import "./RepositoryList.css";

const RepositoryList = () => {
  const { repos, loading, error, refetch } = useRepositories();

  console.log("--------------------------------");
  console.log(repos, loading, error);

  return (
    <Container className="main" size="xl">
      <h1>Repository List</h1>
      {/* Add your repository list rendering logic here */}

      <main>
        <p>This is where the list of repositories will be displayed.</p>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {repos && repos.length > 0 ? (
          <section className="repository-list">
            {repos.map((repo) => (
              <RepoCard repo={repo} key={repo.id} />
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
