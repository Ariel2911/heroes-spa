import { getHeroesByPublisher } from '../helpers';
import { HeroCard } from './HeroCard';

export const HeroesList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <div className="row rows-cols-1 rows-cols-md-3 g-3">
      {heroes.map((heroe) => (
        <HeroCard key={heroe.id} {...heroe} />
      ))}
    </div>
  );
};
