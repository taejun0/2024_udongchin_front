import * as S from "./styled";
import React from "react";
import { Kakaomap } from "@components/specific/kakaomap/Kakaomap";
import useKakaomaps from "@hooks/useKakaomaps";
import { mockLocations } from "@constants/mockLocations";


export const HomePage = () => {
  const { locations, loading, error } = useKakaomaps();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ position: "relative", height: "100vh"}}>
      <Kakaomap locations={mockLocations} />
    </div>
  )
}

export default HomePage;