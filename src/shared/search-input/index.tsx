import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './search-input.scss';

const SearchInput: React.FC = () => {
    return (
        <div className="search-input">
            <SearchIcon />
            <input placeholder="Buscar" type={'text'} className="input" />
            <button className="submit">Buscar</button>
        </div>
    );
};

export { SearchInput };
