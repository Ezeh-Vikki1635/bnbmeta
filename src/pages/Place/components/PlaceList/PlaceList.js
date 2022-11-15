import React from "react";
import styled from "styled-components";

import Rating from "../../../../components/Rating";
import { data } from "./PlaceData";

const PlaceList = () => {
  const placeData = data.map((place, index) => {
    return <Rating key={index} placeData={place} />;
  });

  return (
    <PlaceContainer>
      <BoxContainer>{placeData}</BoxContainer>
    </PlaceContainer>
  );
};

export default PlaceList;

const PlaceContainer = styled.div`
  max-width: 122rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto 8rem;

  @media (max-width: 72em) {
    padding: 0 5rem;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media (max-width: 72em) {
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 46.6em) {
    column-gap: 5rem;
  }
`;
