import React from "react";
import { useSuperHeroData } from "../hooks/useSuperHeroData";
import { useParams } from "react-router-dom";

const RQSuperHeroPage = () => {
  const { heroId } = useParams();
  const { isLoading, data, isError, error } = useSuperHeroData(heroId);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      {data?.data.name} - {data?.data.alterEgo}
    </div>
  );
};

export default RQSuperHeroPage;
