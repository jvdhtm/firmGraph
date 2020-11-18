import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 10px;
    }
    #spritemap{
        display:none;
    }
    body {
        font-family: ${theme.fonts.primary};
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
    }
   *{
    box-sizing: border-box;
   }
   a{
       color:${theme.white};
       cursor: pointer;
   }
   p{
        color:${theme.paragraph.color};
   }
   input {
        width: 100%;
        border: none;
        outline: none;
    }

    img {
        width: 100%;
    }

    a {
        text-decoration: none;
        color: ${theme.paragraph.color};

        &:hover {
            text-decoration: none;
            color:${theme.paragraph.color};
        }
    }

    input[type=text]::-ms-clear {
        display: none;
        width: 0;
        height: 0;
    }

    input[type=text]::-ms-reveal {
        display: none;
        width: 0;
        height: 0;
    }

    input[type="search"]::-webkit-search-decoration,
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-results-button,
    input[type="search"]::-webkit-search-results-decoration {
        display: none;
    }
    input[type="search"]{
        -webkit-appearance:none;
    }

    button{
        outline: none;
        border: none;
        background: transparent;
    }
`;
