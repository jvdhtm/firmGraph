import React from 'react';
import { Link } from "react-router-dom";
import style from './style';
import styled from 'styled-components';

const Wrapper = styled.div`
  ${style}
`;

interface Props {
    header: string;
    image: string;
    desc: string;
    link: string;
}


const Card = ({header,image,desc,link}:Props) => {
    return (
        <Wrapper className="card">
                <Link to={link}>
                            <h1>
                                {header}
                            </h1>
                            <img src={image} alt=""/>
                    <div className="card__body">
                            
                            <p>
                                {desc}
                            </p>
                    </div>
                </Link>
        </Wrapper>
    );
}

export default Card;
