
import { css } from 'styled-components';

const style = css` & {
    max-width: 100%;
    position: relative;
    .search {
        width: 100%;
        position: relative;
    
    }
    .search__body {

    }

    .search__results {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        margin-top: 3rem;
        position: relative;
        h3{

            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }

        ${props => props.theme.mediaBreakpointUp('desktop')} {
            margin-top: 0;
        }

        a {
            flex-basis: 50%;
            max-width: 50%;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            margin-bottom: 3rem;
            text-align: center;
            
            ${props => props.theme.mediaBreakpointUp('desktop')} {
                flex-basis: 20%;
                max-width: 20%;
            }
        }

    }

    .text--center{
        text-align: center;
    }

}
`;

export default style;