import Container from "components/layout/Container";
import DetailPage from "pages/DetailPage";
import LinkPage from "pages/LinkPage";
import GlobalStyle from "styles/GlobalStyle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<LinkPage />} />
          <Route path="/:key" element={<DetailPage />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
