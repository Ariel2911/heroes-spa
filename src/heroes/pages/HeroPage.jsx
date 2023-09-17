import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {

  const { id } = useParams();

  const hero = getHeroById(id);


  if (!hero) {
    return <Navigate to="/marvel" />
  }

  return (
    <>
      <div className="row mt-5">
        <div className="col-4">
          <img src={`/assets/heroes/${id}.jpg`} alt={hero.superhero} className="img-thumbnail" />

        </div>
        <div className="col-8">
          <h3>{hero.superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> <b>Alter ego:</b> {hero.alter_ego}</li>
            <li className="list-group-item"> <b>Publishero:</b> {hero.publishero}</li>
            <li className="list-group-item"> <b>First_Appearance:</b> {hero.first_appearance}</li>
          </ul>

          <h4 className="mt-3">Characters</h4>
          <p>{hero.characters}</p>

          <button className="btn btn-outline-primary" >
            Back
          </button>
        </div>
      </div>
    </>
  )
};
