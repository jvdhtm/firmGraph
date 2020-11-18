import React from 'react';
import styled from 'styled-components';
import style from './style';
import {ItemLink} from '../../types';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  ${style}
`;


interface Props {
  items: ItemLink[];
  locale: string;
}

const Menu =({items,locale}:Props )=> {
    return <Wrapper>
            <ul className="menu">
            { items.map((item, i) => { 
                  return <li key={i}>
                            { item.link ? 
                            <Link to={item.link} className={ 
                              item.active ? "active":""
                              }>{item.title}</Link>:
                              <span className={
                                item.active  ? "active":""
                              }>{item.title}</span>}
                            {
                              item.children.length > 0  ?  <Menu locale={locale} items={item.children}/>:""}
                            
                           
                        </li>
                        
                })
              }

            </ul>
        </Wrapper>

}

Menu.propTypes = {
    items: PropTypes.array
};

export default Menu;