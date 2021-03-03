import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
`;

export const Layout = styled.div`
  width: 90vw;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    width: 40vw;
  }
`;

export default GlobalStyles;
