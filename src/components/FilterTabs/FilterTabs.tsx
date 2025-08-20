import "./FilterTabs.css";

interface FilterTabsProps {
  selectedTab: "all" | "starred";
  onTabChange: (tab: "all" | "starred") => void;
}

const FilterTabs = ({ selectedTab, onTabChange }: FilterTabsProps) => {
  return (
    <div className="filtertabs">
      <button
        onClick={() => onTabChange("all")}
        className={`filtertabs__tab ${
          selectedTab === "all" ? "filtertabs__tab-active" : ""
        }`}
      >
        All Repositories
      </button>
      <button
        onClick={() => onTabChange("starred")}
        className={`filtertabs__tab ${
          selectedTab === "starred" ? "filtertabs__tab-active" : ""
        }`}
      >
        Starred
      </button>
    </div>
  );
};

export default FilterTabs;
