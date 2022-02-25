import React from "react";
import Container from "components/layout/Container";
import DetailPage from "pages/DetailPage";
import LinkPage from "pages/LinkPage";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import { useEffect } from "react";
import useAxios from "hooks/useAxios";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <LinkPage />
        {/* <DetailPage /> */}
      </Container>
    </>
  );
}

export default App;
