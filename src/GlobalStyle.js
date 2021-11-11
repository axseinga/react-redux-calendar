import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
}

body {
    background-color: #EAECF0;
    display: flex;
    justify-content: center;
    box-sizing: inherit;
}
`;

export default GlobalStyle;
