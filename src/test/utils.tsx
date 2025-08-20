import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Repository } from "../types/index";

// Custom render function
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { ...options });

// Re-export everything
export * from "@testing-library/react";
export { customRender as render };

// Mock data
export const mockRepository: Repository = {
  id: 1,
  node_id: "MDEwOlJlcG9zaXRvcnkx",
  name: "test-repo",
  full_name: "testuser/test-repo",
  private: false,
  owner: {
    login: "testuser",
    id: 1,
    node_id: "MDQ6VXNlcjE=",
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/testuser",
    html_url: "https://github.com/testuser",
    followers_url: "https://api.github.com/users/testuser/followers",
    following_url:
      "https://api.github.com/users/testuser/following{/other_user}",
    gists_url: "https://api.github.com/users/testuser/gists{/gist_id}",
    starred_url: "https://api.github.com/users/testuser/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/testuser/subscriptions",
    organizations_url: "https://api.github.com/users/testuser/orgs",
    repos_url: "https://api.github.com/users/testuser/repos",
    events_url: "https://api.github.com/users/testuser/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/testuser/received_events",
    type: "User",
    user_view_type: "public",
    site_admin: false,
  },
  html_url: "https://github.com/testuser/test-repo",
  description: "A test repository for testing purposes",
  fork: false,
  url: "https://api.github.com/repos/testuser/test-repo",
  forks_url: "https://api.github.com/repos/testuser/test-repo/forks",
  keys_url: "https://api.github.com/repos/testuser/test-repo/keys{/key_id}",
  collaborators_url:
    "https://api.github.com/repos/testuser/test-repo/collaborators{/collaborator}",
  teams_url: "https://api.github.com/repos/testuser/test-repo/teams",
  hooks_url: "https://api.github.com/repos/testuser/test-repo/hooks",
  issue_events_url:
    "https://api.github.com/repos/testuser/test-repo/issues/events{/number}",
  events_url: "https://api.github.com/repos/testuser/test-repo/events",
  assignees_url:
    "https://api.github.com/repos/testuser/test-repo/assignees{/user}",
  branches_url:
    "https://api.github.com/repos/testuser/test-repo/branches{/branch}",
  tags_url: "https://api.github.com/repos/testuser/test-repo/tags",
  blobs_url: "https://api.github.com/repos/testuser/test-repo/git/blobs{/sha}",
  git_tags_url:
    "https://api.github.com/repos/testuser/test-repo/git/tags{/sha}",
  git_refs_url:
    "https://api.github.com/repos/testuser/test-repo/git/refs{/sha}",
  trees_url: "https://api.github.com/repos/testuser/test-repo/git/trees{/sha}",
  statuses_url:
    "https://api.github.com/repos/testuser/test-repo/statuses/{sha}",
  languages_url: "https://api.github.com/repos/testuser/test-repo/languages",
  stargazers_url: "https://api.github.com/repos/testuser/test-repo/stargazers",
  contributors_url:
    "https://api.github.com/repos/testuser/test-repo/contributors",
  subscribers_url:
    "https://api.github.com/repos/testuser/test-repo/subscribers",
  subscription_url:
    "https://api.github.com/repos/testuser/test-repo/subscription",
  commits_url: "https://api.github.com/repos/testuser/test-repo/commits{/sha}",
  git_commits_url:
    "https://api.github.com/repos/testuser/test-repo/git/commits{/sha}",
  comments_url:
    "https://api.github.com/repos/testuser/test-repo/comments{/number}",
  issue_comment_url:
    "https://api.github.com/repos/testuser/test-repo/issues/comments{/number}",
  contents_url:
    "https://api.github.com/repos/testuser/test-repo/contents/{+path}",
  compare_url:
    "https://api.github.com/repos/testuser/test-repo/compare/{base}...{head}",
  merges_url: "https://api.github.com/repos/testuser/test-repo/merges",
  archive_url:
    "https://api.github.com/repos/testuser/test-repo/{archive_format}{/ref}",
  downloads_url: "https://api.github.com/repos/testuser/test-repo/downloads",
  issues_url: "https://api.github.com/repos/testuser/test-repo/issues{/number}",
  pulls_url: "https://api.github.com/repos/testuser/test-repo/pulls{/number}",
  milestones_url:
    "https://api.github.com/repos/testuser/test-repo/milestones{/number}",
  notifications_url:
    "https://api.github.com/repos/testuser/test-repo/notifications{?since,all,participating}",
  labels_url: "https://api.github.com/repos/testuser/test-repo/labels{/name}",
  releases_url: "https://api.github.com/repos/testuser/test-repo/releases{/id}",
  deployments_url:
    "https://api.github.com/repos/testuser/test-repo/deployments",
  created_at: "2023-01-01T00:00:00Z",
  updated_at: "2023-01-01T00:00:00Z",
  pushed_at: "2023-01-01T00:00:00Z",
  git_url: "git://github.com/testuser/test-repo.git",
  ssh_url: "git@github.com:testuser/test-repo.git",
  clone_url: "https://github.com/testuser/test-repo.git",
  svn_url: "https://github.com/testuser/test-repo",
  homepage: "https://testuser.github.io/test-repo",
  size: 108,
  stargazers_count: 42,
  watchers_count: 42,
  language: "TypeScript",
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  has_discussions: false,
  forks_count: 9,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: {
    key: "mit",
    name: "MIT License",
    spdx_id: "MIT",
    url: "https://api.github.com/licenses/mit",
    node_id: "MDc6TGljZW5zZW1pdA==",
  },
  allow_forking: true,
  is_template: false,
  web_commit_signoff_required: false,
  topics: ["react", "typescript", "testing"],
  visibility: "public",
  forks: 9,
  open_issues: 0,
  watchers: 42,
  default_branch: "main",
  score: 1.0,
};

export const mockApiResponse = {
  total_count: 1,
  incomplete_results: false,
  items: [mockRepository],
};
