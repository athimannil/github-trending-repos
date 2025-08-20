import "./LanguageFilter.css";

interface LanguageFilterProps {
  languages: string[];
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

const LanguageFilter = ({
  languages,
  selectedLanguage,
  onLanguageChange,
}: LanguageFilterProps) => {
  return (
    <div className="language-filter">
      <label className="language-filter-label" htmlFor="language-select">
        Filter by Language:
      </label>
      <select
        id="language-select"
        className="language-filter-select"
        name="language"
        value={selectedLanguage}
        onChange={(e) => onLanguageChange(e.target.value)}
      >
        <option value="all">All Languages</option>
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageFilter;
