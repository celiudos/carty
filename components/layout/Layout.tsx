import Navbar from "@components/layout/Navbar";
import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <MainCss>
      <HeaderCss>
        <Container maxWidth="lg" id="header">
          <Navbar />
        </Container>
      </HeaderCss>
      <Container maxWidth="lg" id="content">
        <CorpoCss>
          <Box p={2}>{children}</Box>
        </CorpoCss>
      </Container>
    </MainCss>
  );
}

const MainCss = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-start;
`;

const HeaderCss = styled.header`
  background: #fff;
`;

const CorpoCss = styled.div`
  flex: 1;

  @media only screen and (max-width: 900px) {
    margin: 20px 0;
  }
`;
