import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyle/global.styled";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { theme } from "./globalStyle/theme";

import Home from "./pages/Home"
import Place from "./pages/Place/Place";


function App() {
  return (
    <AppContainer>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MainContainer>
          <Router>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/Place-to-stay" element={< Place />} />
            </Routes>
          </Router>
        </MainContainer>
      </ThemeProvider>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContainer = styled.div`
  flex-direction: column;
  gap: 2.5rem;
  justify-content: center;

  ${AppContainer} & {
    width: 144rem;
  }

  @media (max-width: 80em) {
    ${AppContainer} & {
      width: 130rem;
    }
  }

  @media (max-width: 72em) {
    ${AppContainer} & {
      width: 120rem;
    }
  }

  @media (max-width: 68em) {
    ${AppContainer} & {
      width: 125rem;
    }
  }

  @media (max-width: 64em) {
    ${AppContainer} & {
      width: 114rem;
    }
  }

  @media (max-width: 45em) {
    ${AppContainer} & {
      width: 112rem;
    }
  }

  @media (max-width: 40em) {
    ${AppContainer} & {
      width: 110rem;
    }
  }

  @media (max-width: 37em) {
    ${AppContainer} & {
      width: 98rem;
    }
  }

  @media (max-width: 34em) {
    ${AppContainer} & {
      width: 92rem;
    }
  }

  @media (max-width: 30em) {
    ${AppContainer} & {
      width: 82rem;
    }
  }

  @media (max-width: 26em) {
    ${AppContainer} & {
      width: 72rem;
    }
  }

  @media (max-width: 25em) {
    ${AppContainer} & {
      width: 68rem;
    }
  }

  @media (max-width: 24.5em) {
    ${AppContainer} & {
      width: 65rem;
    }
  }

  @media (max-width: 23em) {
    ${AppContainer} & {
      width: 60rem;
    }
  }

  @media (max-width: 21em) {
    ${AppContainer} & {
      width: 55rem;
    }
  }

  @media (max-width: 19em) {
    ${AppContainer} & {
      width: 50rem;
    }
  }

  @media (max-width: 17em) {
    ${AppContainer} & {
      width: 45rem;
    }
  }

  @media (max-width: 15em) {
    ${AppContainer} & {
      width: 40rem;
    }
  }
`;
