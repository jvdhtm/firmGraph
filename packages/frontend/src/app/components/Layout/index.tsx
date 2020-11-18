import React from 'react';
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import {ItemLink} from '../../types';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme/theme';
import Global from '../../theme/global';
import style from './style';
import styled from 'styled-components';
const Wrapper = styled.div`
  ${style}
`;

const LayoutStandard: React.FC<React.ReactNode> = ({children}) => {

    const items:ItemLink[] =
    [
        {
            link: '#',
            active: true,
            title: 'Types',
            children: [],
        },
        {
            link: '#',
            active: false,
            title: 'Attributes',
            children: [],
        },
        {
            link: '#',
            active: false,
            title: 'Users',
            children: [],
        },
        {
            link: '#',
            active: false,
            title: 'Access',
            children: [],
        }
    ]

    return (
        <ThemeProvider theme={theme}>
            <Global/>
            <Wrapper>
                <div className="standard">
                    <Header items={items}/>
                    <main>
                        {children}
                    </main>
                    <Footer/>
                </div>
            </Wrapper>
        </ThemeProvider>
    );
}
export default LayoutStandard;
