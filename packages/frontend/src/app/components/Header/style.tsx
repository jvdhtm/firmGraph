import { css } from 'styled-components';

const style = css`
&{
    background-color:  ${props =>  props.theme.white };
    height: 15rem;
  .header{
    display:flex;
    flex-wrap:wrap;
    
    ${props => props.theme.mediaBreakpointUp('desktop')} {
            margin-left: auto;
            margin-right: auto;
            max-width: 120rem;
    }

    ${props => props.theme.mediaBreakpointUp('desktop')}  {
        height: 15rem;
    }

    &__logo{
        display:flex;
        flex-basis: 5%;
        max-width: 5%;
        position: relative;
        align-items: center;
        svg {
            width: 2rem;
        }
    }
    &__button{
        display:none;
    }
    &__container{
        display: flex;
        align-items: center;
        flex-basis: 90%;
        max-width: 90%;
        padding-left: 1rem;
        padding-right: 1rem;
        ${props => props.theme.mediaBreakpointUp('desktop')}   {
            flex-basis: 90%;
            max-width: 90%;
        }
        
        ul{
            display:flex;
            list-style: none;
            margin:0px;
            padding:0px;
            li{
               padding:10px;
            }
        }
        a{
            text-decoration:none;
            color:${props =>  props.theme.grayscale[3] };
            &:hover{
                color:${props =>  props.theme.grayscale[4]  };
                text-decoration:none;
            }
        }
    }
  
    &__profile{
        position:absolute;
        right:10px;
        button{
        background-color: transparent;
        border: 1px solid transparent;
        }
    }
  }
}
`;
export default style;