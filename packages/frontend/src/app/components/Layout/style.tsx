import { css } from 'styled-components';

const style = css`

.standard {
    display:flex;
    flex-direction:column;
    background-color:  ${props =>  props.theme.grayscale[6] };
    min-height:100vh;
    padding-bottom:15rem;
    *, :after, :before {
        box-sizing: border-box;
    }

    header,footer {
        flex-basis: 100%;
        max-width: 100%;

    }
    footer {
        position:absolute;
        bottom:0;
        width:100%;
        height:15rem;
    }
    main {
        display: flex;
        flex-wrap: wrap;
        flex-basis: 100%;
        max-width: 100%;
        margin-top: 5rem;
        display: grid;
        grid-gap: 3rem;
        padding-top:3rem;
        ${props => props.theme.mediaBreakpointUp('desktop')} {
            max-width: 120rem;
            margin-left: auto;
            margin-right: auto;
            margin-top: 0;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            
        }
       

    }
    .container{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }
    .menu {
        flex-basis: 100%;
        max-width: 100%;
        ${props => props.theme.mediaBreakpointUp('desktop')} {
            flex-basis: 25%;
            max-width: 25%;
        }

    }

    .wrapper {
        width: 100%;
        ${props => props.theme.mediaBreakpointUp('desktop')} {
            flex-basis: 75%;
            max-width: 75%;

        }

    }


    .field__input {
        border-bottom: thin solid  ${props => props.theme.grayscale[4]};

        label {
            color: ${props => props.theme.grayscale[4]};
            font-weight: normal;
            position: absolute;
            pointer-events: none;
            left: 1rem;
            top: 0rem;
            transition: 0.2s ease all;
            -moz-transition: 0.2s ease all;
            -webkit-transition: 0.2s ease all;
            opacity: 1;
        }

        input {
            font-size: 1.7rem;
            border: none;
            max-width: 100%;
            border-radius: 0;
            padding-right: 1.5rem;

            &:focus {
                outline: none;
            }

            &:focus ~ label {
                top: -1.5rem;
                font-size:0;
                color: ${props => props.theme.grayscale[400]};
            }

            &.notempty ~ label {
                top: -1rem;
                font-size: 0.5rem;
                color: ${props => props.theme.grayscale[400]};
                opacity: 0;
            }
        }

        button{
            border: none;
            background: transparent;
            outline: none;
            position: absolute;
            .icon{
                width: 1.5rem;
                height: 1.5rem;
            }
        }
    }
    .hidden{
        display: none !important;
    }
}`;
export default style;