import { css } from 'styled-components';

const style = css`
&{
    background-color:  ${props =>  props.theme.white };
    .footer{
        display:flex;
        flex-wrap:wrap;
       
        ${props => props.theme.mediaBreakpointUp('desktop')} {
            margin-left: auto;
            margin-right: auto;
            max-width: 120rem;
        }
    }
}
`;

export default style;