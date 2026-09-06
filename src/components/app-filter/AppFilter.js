import{ useContext } from "react";
import "./AppFilter.css";
import { Context } from "../context";
const AppFilter = ({ updateFilterHandler}) => {

const {state, dispatch} = useContext(Context)

  return (
    <div className="app-filter">
      {movieList.map((btn) => (
        <button
          key={btn.name}
          className={`btn ${state.filter===btn.name ? 'btn-dark' : 'btn-outline-dark'}`}
          onClick={() =>   dispatch({type:"ON_FILTER", payload:btn.name})}
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
