import { useParams } from "react-router-dom";

export const HeroPage = () => {

  const { id } = useParams();
  console.log(id);

  return <div>HeroPage</div>;
};
