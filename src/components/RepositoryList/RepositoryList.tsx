import { useEffect, useState } from "react";
import Container from "../Container/Container";

// import { Repository } from "../../types/index";

import { useRepositories } from "../../hooks/useRepositories";

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
          <ul>
            {repos.map((repo) => (
              <li key={repo.id}>
                <h2>{repo.name}</h2>
                <p>{repo.description}</p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Repository
                </a>
              </li>
            ))}
          </ul>
        ) : (
          !loading && <p>No repositories found.</p>
        )}
        <button onClick={refetch}>Refetch Repositories</button>
      </main>
    </Container>
  );
};
export default RepositoryList;
