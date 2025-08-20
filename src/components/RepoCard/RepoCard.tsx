import { BsBoxArrowUpRight, BsStar, BsStarFill } from "react-icons/bs";
import { PiGitForkLight } from "react-icons/pi";

import { Repository } from "../../types/index";

import "./RepoCard.css";

interface RepoCardProps {
  repo: Repository;
  isStarred: boolean;
  onToggleStar: () => void;
}

const RepoCard = ({ repo, onToggleStar, isStarred }: RepoCardProps) => {
  const {
    name,
    full_name,
    html_url,
    description,
    stargazers_count,
    language,
    forks_count,
    owner,
    updated_at,
  } = repo;

  const formatNumber = (num: number): string => {
    return num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num.toString();
  };

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
            aria-label={`Open ${full_name} on GitHub`}
          >
            <BsBoxArrowUpRight size={14} />
          </a>
        </div>
        <button
          className={`repocard__star-button ${
            isStarred ? "repocard__star-button--starred" : ""
          }`}
          onClick={onToggleStar}
          aria-label={`${isStarred ? "Unstar" : "Star"} ${name}`}
        >
          {isStarred ? <BsStarFill size={12} /> : <BsStar size={12} />}
          <span className="sr-only">{isStarred ? "Starred" : "Star"}</span>
        </button>
      </div>
      <p className="repocard__description">
        {description || "No description available"}
      </p>
      <div className="repocard__stats">
        <span className="repocard__stat">
          <BsStar size={14} />
          {formatNumber(stargazers_count)}
        </span>
        <span className="repocard__stat">
          <PiGitForkLight size={14} />
          <span className="repocard__stat-count">
            {formatNumber(forks_count)}
          </span>
        </span>
        {language && <span className="repocard__language">{language}</span>}
      </div>
      <div className="repocard__footer">
        <div className="repocard__owner-info">
          <img
            className="repocard__owner-avatar"
            src={owner.avatar_url}
            alt={`${owner.login}'s avatar`}
          />
          <span className="repocard__owner-name">{owner.login}</span>
        </div>
        <span className="repocard__updated-at">
          Updated: {new Date(updated_at).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default RepoCard;
