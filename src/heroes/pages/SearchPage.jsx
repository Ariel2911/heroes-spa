import { HeroCard } from "../component/HeroCard";

export const SearchPage = () => {
  return (
    <>
      <h2>Search</h2>
      <hr />

      <div className="row">

        <div className="col-5">

          <h3>Searching</h3>
          <hr />

          <form>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
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
            No hero with <b>ABC</b>
          </div>

          {/* <HeroCard {...hero} /> */}

        </div>

      </div>
    </>
  );
};
