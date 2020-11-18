import { css } from 'styled-components';

const style = css`
&{

    border:thin solid  ${props => props.theme.grayscale[4]};
    background-color:  ${props =>  props.theme.white };
    border-radius:2rem;
    .card{
       
       &__body{
            padding:1.5rem;
       }
    }

    h1{
        padding-left:1.5rem;
    }

    img{
        max-width:100%;
    }
}
`;

export default style;