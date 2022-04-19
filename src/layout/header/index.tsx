import React from 'react';
import { Logo } from '../../shared/components';
import { SearchInput } from '../../shared/search-input';
import './header.scss';

const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="logo-wrapper">
                    <Logo />
                </div>
                <div className="search-bar">
                    <SearchInput />
                </div>
                <div className="avatar"></div>
            </div>
        </div>
    );
};

export default Header;
