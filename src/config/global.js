import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Nunito Sans', sans-serif;
        font-size: 1rem;

        overflow-x: hidden;
    }

    .leaflet-bottom {
        display: none;
    }

`