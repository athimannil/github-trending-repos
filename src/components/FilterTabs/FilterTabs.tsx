import "./FilterTabs.css";

const FilterTabs = () => {
  return (
    <div className="filtertabs">
      <button className="filtertabs__tab">All Repositories</button>
      <button className="filtertabs__tab filtertabs__tab-active">
        Starred
      </button>
    </div>
  );
};

export default FilterTabs;
