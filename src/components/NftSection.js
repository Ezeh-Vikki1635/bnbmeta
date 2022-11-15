import React from "react";
import styled from "styled-components";

import image from "../assets/images/image.svg";

const NftSection = () => {
  return (
    <NftContainer>
      <TextContainer>
        <h2>Metabnb NFTs</h2>
        <p>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our customer
          access to loads of our exclusive services.
        </p>
        <button>Learn more</button>
      </TextContainer>
      <ImageContainer>
        <img src={image} alt="" />
      </ImageContainer>
    </NftContainer>
  );
};

export default NftSection;

const NftContainer = styled.div`
  padding: 0 calc(100vw - 133.8rem);
  height: 77.4rem;
  margin: 0 auto;
  background: linear-gradient(90deg, #a02279 11.45%, #a02279 11.45%);
  border: 1px solid #000000;
  display: flex;
  justify-content: space-between;
  gap: 7rem;
  align-items: center;
  color: #fff;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45rem;
  gap: 5rem;
  

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 4rem;
    font-family: inherit;
    border: none;
    background: linear-gradient(124.4deg, #ffffff 10.8%, #ffffff 87.34%);
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.primaryColor};
    cursor: pointer;
    margin-left: 100px;
  }

  h2 {
    font-size: 40px;
    margin-left: 100px;
  }

  p {
    margin-left: 100px;
    background: linear-gradient(124.4deg, #ffffff 10.8%, #ffffff 87.34%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 3.5rem;
    -text-fill-color: transparent;
  }
`;

const ImageContainer = styled.div`
  width: 70.4rem;
  position: relative;

  img {
    width: 100%;
    left: 0rem;
    bottom: 9.5rem;
    z-index: 2;
  }
`;
