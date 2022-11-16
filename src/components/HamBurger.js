import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HamBurger = ({ setIsModalOpen, setNavButton }) => {
  return (
    <BuggerOuterContainer>
      <Centered>
        <Container>
          <ContentContainer>
            <NavLink>
              <ul>
                <li>
                  <Link onClick={() => setNavButton(false)} to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setNavButton(false)} to="/place-to-stay">
                    Place to stay
                  </Link>
                </li>
                <li>
                  <Link to="/">NFTs</Link>
                </li>
                <li>
                  <Link onClick={() => setNavButton(false)} to="/">
                    Community
                  </Link>
                </li>
              </ul>
            </NavLink>
            <ConnectButton
              aria-label="connect"
              onClick={() => {
                setIsModalOpen(true);
                setNavButton(false);
              }}
            >
              Connect Wallet
            </ConnectButton>
          </ContentContainer>
        </Container>
      </Centered>
    </BuggerOuterContainer>
  );
};

export default HamBurger;

const BuggerOuterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 999;
  background: rgba(64, 64, 64, 0.3);
  
  overflow: hidden;
`;

const Centered = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  border-radius: 1.6rem;
`;

const ContentContainer = styled.div`
  position: relative;
  padding: 24rem 6rem 6rem;
`;

const NavLink = styled.div`
  font-size: 6.5rem;
  color: linear-gradient(
    90deg,
    ${({ theme }) => theme.textColors.primaryTextColor} 11.45%,
    ${({ theme }) => theme.textColors.primaryTextColor} 11.45%
  );

  ul {
    display: flex;
    flex-direction: column;
    gap: 9rem;

    li {
      cursor: pointer;

      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
`;

const ConnectButton = styled.button`
  margin-top: 8rem;
  bottom: 0;
  font-family: inherit;
  font-size: 4rem;
  padding: 1.8rem 3rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.primaryColor};
  border: 1px solid ${({ theme }) => theme.colors.primaryColor};
  border-radius: 10px;
  cursor: pointer;
`;
