import React, {useContext} from 'react';
import style from './style';
import styled from 'styled-components';
import {ReactComponent as Logo} from './../../assests/svg/yin-yang.svg';
import {ReactComponent as IconList} from './../../assests/svg/list.svg';
import {ReactComponent as IconEnvelope} from './../../assests/svg/envelope.svg';
import {ReactComponent as IconNotification} from './../../assests/svg/notification.svg';
import {ReactComponent as IconUser} from './../../assests/svg/user.svg';
import {ItemLink} from '../../types';
import {LocalizationContext} from "../../context/LocalizationContext";
import Search from "../../components/Search"
import Menu from "../Menu"
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';


const Wrapper = styled.header`
  ${style}
`;

interface Props {
    items: ItemLink[];
}

const Header = ({ items } :Props ) => {
  const {localePIM} = useContext(LocalizationContext);
  const {t} = useTranslation();
    return(
      <Wrapper  >
        <div className="header">
        <Link className="header__logo" to="/">
          <Logo></Logo>
        </Link>
        <div className="header__container">
            <button type="button" className="header__button" >
              <IconList/>
            </button>
            <div className="header__navigation">
                {items.length > 0 ? <Menu locale={localePIM} items = {items}></Menu>:""}
            </div>
            <div className="header__profile">
            <button type="button" className="header__email" >
              <IconEnvelope />
            </button>
            <button type="button" className="header__notifications" >
              <IconNotification />
            </button>
            <button type="button"  className="header__user" >
              <IconUser/>
            </button>
            </div>
          </div>
          <Search searchLabel={t('search')} searchUrl={'/search'}/>
          </div>
      </Wrapper>
  )
}
  

export default Header;
