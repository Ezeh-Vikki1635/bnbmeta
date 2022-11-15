import React, { useState } from "react";
import styled from "styled-components";

import setting from "./assets/setting.svg";


const PlaceNav = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const options = [
    "Restaurant",
    "Cottage",
    "Castle",
    "Fantasy City",
    "Beach",
    "Carbins",
    "Off-grid",
    "Farm",
  ];

  return (
    <NavContainer>
      <ParentDiv>
        <Filter onClick={() => setIsOpen(!isOpen)}>
          <p>{selectedOption || "Castle"}</p>
          <img src={setting} alt="setting icon" />
        </Filter>

        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map((option, index) => (
                <ListItem onClick={onOptionClicked(option)} key={index}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}

        <PlaceList>
          <ul>
            <li>Restaurant</li>
            <li>Cottage</li>
            <li>Castle</li>
            <li>Fantasy City</li>
            <li>Beach</li>
            <li>Carbins</li>
            <li>Off-grid</li>
            <li>Farm</li>
            <li></li>
          </ul>
        </PlaceList>
      </ParentDiv>
      <Location>
        <p>Location</p>
        <img src={setting} alt="setting icon" />
      </Location>
    </NavContainer>
  );
};

export default PlaceNav;

const NavContainer = styled.div`
  max-width: 122rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8rem auto 5rem;

  @media (max-width: 72em) {
    padding: 0 5rem;
  }
`;

const Filter = styled.div`
  display: none;

  @media (max-width: 37em) {
    display: flex;
    gap: 3rem;
    justify-content: space-between;
    border: 1px solid #b4b4b4;
    border-radius: 8px;
    padding: 1rem 1.2rem;
    align-items: center;

    p {
      margin: 0;
      font-size: 2rem;
      font-weight: 400;
    }

    img {
      width: 2.4rem;
    }

    @media (max-width: 72em) {
      p {
        font-size: 1.8rem;
        font-weight: 300;
      }
    }

    @media (max-width: 45em) {
      p {
        font-weight: 300;
      }
    }
  }
`;

const PlaceList = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;

  ul {
    display: flex;
    gap: 4rem;
    align-items: center;
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.48rem;

    li {
      position: relative;
    }
  }

  @media (max-width: 72em) {
    ul {
      font-size: 1.8rem;
      gap: 3rem;
    }
  }

  @media (max-width: 46em) {
    gap: 3rem;
  }

  @media (max-width: 37em) {
    gap: 2rem;

    ul {
      display: none;
    }
  }

  @media (max-width: 39em) {
    gap: 1rem;
    ul {
      gap: 1rem;
    }
  }
`;

const Location = styled.div`
  display: flex;
  gap: 3rem;
  border: 1px solid #b4b4b4;
  border-radius: 8px;
  padding: 1rem 1.2rem;
  align-items: center;

  p {
    margin: 0;
    font-size: 2rem;
    font-weight: 400;
  }

  img {
    width: 2.4rem;
  }

  @media (max-width: 72em) {
    p {
      font-size: 1.8rem;
      font-weight: 300;
    }
  }

  @media (max-width: 45em) {
    p {
      font-weight: 300;
    }
  }
`;

const ParentDiv = styled.div`
  position: relative;
`;

const DropDownListContainer = styled.div`
  position: absolute;
  width: 40rem;
  top: 5rem;
  z-index: 999;
`;

const DropDownList = styled.ul`
  margin: 0;
  padding-left: 1em;
  padding-right: 1em;
  font-size: 2rem;
  color: inherit;
  font-weight: 500;
  text-align: center;
  background-color: #fff;
  /* border: 2px solid ${({ theme }) => theme.colors.primaryColor}; */
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  flex-direction: center;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled.li`
  position: relative;
  margin-bottom: 0.8rem;
  padding: 2rem;

  &:not(:last-child) {
    ::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 14rem;

      width: 8rem;
      height: 0.2rem;
      background-color: ${({ theme }) => theme.colors.primaryColor};
    }
  }
`;
