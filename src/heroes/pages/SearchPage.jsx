import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string"
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../component/HeroCard";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = ' ' } = queryString.parse(location.search);

  const { searchText, onInputChange } = useForm({
    searchText: ''
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();

    if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`)
  }

  return (
    <>
      <h2>Search</h2>
      <hr />

      <div className="row">

        <div className="col-5">

          <h3>Searching</h3>
          <hr />

          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>

        </div>

        <div className="col-7">

          <h3>Result</h3>
          <hr />

          <div className="alert alert-primary">
            Search a hero
          </div>

          <div className="alert alert-danger">
            No hero with <b>{q}</b>
          </div>

          {/* <HeroCard {...hero} /> */}

        </div>

      </div>
    </>
  );
};
