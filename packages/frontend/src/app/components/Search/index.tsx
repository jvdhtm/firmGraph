import React, {ChangeEvent, useState, FormEvent} from 'react';
import {ReactComponent as SearchIcon} from './../../assests/svg/search.svg';
import classnames from "classnames";
import style from './style';
import styled from 'styled-components';
const Wrapper = styled.div`
  ${style}
`;

interface SearchProps {
    searchLabel: string,
    searchUrl: string,
}

const Search: React.FC<SearchProps> = (props: SearchProps) => {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    };
 
    const [value, setValue] = useState('');
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <Wrapper>
            <div className="search">
                <form onSubmit={handleSubmit}>
                    <div className="search__body">
                        <div className="field__input">
                            <input className={classnames({notempty: value !== ""})} type="search" name="query"
                                onChange={handleChange}
                                value={value}/>
                                <button><SearchIcon/></button>
                            
                            <label>{props.searchLabel}</label>
                        </div>
                    </div>
                </form>
            </div>
        </Wrapper>
    );
}

export default Search;
