import { BsBoxArrowUpRight } from "react-icons/bs";
import "./RepoCard.css";
import { PiGitForkLight } from "react-icons/pi";

const RepoCard = ({ repo }) => {
  const { name, html_url, description, stargazers_count, language } = repo;
  return (
    <div className="repocard">
      <div className="repocard__header">
        <div className="repocard__title">
          <h3 className="repocard__name">{name}</h3>
          <a
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="repocard__link"
          >
            <BsBoxArrowUpRight size={14} />
          </a>
        </div>
        <div className="repocard__star">
          <span className="repocard__star-count">{stargazers_count}</span>
          <span className="repocard__star-icon">★</span>
        </div>
      </div>
      <p className="repocard__description">
        {description || "No description available"}
      </p>
      <div className="repocard__stats">
        <span className="repocard__stat">
          <PiGitForkLight size={14} />
          <span className="repocard__stat-count">{repo.forks_count}</span>
        </span>
        {language && <span className="repocard__language">{language}</span>}
      </div>
      <div className="repocard__footer">
        <div className="repocard__owner-info">
          <img
            className="repocard__owner-avatar"
            src={repo.owner.avatar_url}
            alt={`${repo.owner.login}'s avatar`}
          />
          <span className="repocard__owner-name">{repo.owner.login}</span>
        </div>
        <span className="repocard__updated-at">
          Updated at: {new Date(repo.updated_at).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default RepoCard;
