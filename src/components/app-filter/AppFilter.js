import React from "react";
import "./AppFilter.css";
const AppFilter = ({ updateFilterHandler,filter }) => {
  return (
    <div className="app-filter">
      {movieList.map((btn) => (
        <button
          key={btn.name}
          className={`btn ${filter===btn.name ? 'btn-dark' : 'btn-outline-dark'}`}
          onClick={() => updateFilterHandler(btn.name)}
          type="button"
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

const movieList = [
  { name: "all", label: "Barcha kinolar" },
  { name: "popular", label: "Mashxur kinolar" },
  { name: "mostViewers", label: "Eng ko'p ko'rilga kinolar" },
];
export default AppFilter;
