import { HeroesList } from '../component/HeroesList';

export const MarvelPage = () => {
  return (
    <>
      <h1>Dc Comics</h1>
      <hr />

      <HeroesList publisher={'Marvel Comics'} />
    </>
  );
};
