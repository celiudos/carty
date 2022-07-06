import Navbar from "@components/layout/Navbar";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <MainCss>
      <Navbar />
      <CorpoCss>
        <Box p={2}>{children}</Box>
      </CorpoCss>
    </MainCss>
  );
}

const MainCss = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  /* background: #ececec; */
`;

const CorpoCss = styled.div`
  flex: 1;
  /* margin: 70px 0; */

  @media only screen and (max-width: 900px) {
    margin: 20px 0;
  }
`;
