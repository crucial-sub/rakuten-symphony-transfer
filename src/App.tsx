import React from "react";
import Container from "components/layout/Container";
import DetailPage from "pages/DetailPage";
import LinkPage from "pages/LinkPage";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useAxios from "hooks/useAxios";

function App() {
  const linkData = useAxios();
  return (
    <Container>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<LinkPage />} />
          <Route path="/:key" element={<DetailPage linkData={linkData} />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
