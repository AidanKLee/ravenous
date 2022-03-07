import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = props => {

    const { searchYelp } = props;

    const sortByOptions = {
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count'
    }

    const [ search, setSearch ] = useState({
        term: '',
        location: '',
        sortBy: 'best_match'
    })

    const { term, location, sortBy } = search;

    const isActiveOption = option => {
        if (search.sortBy === option) {
            return 'active';
        }
        return '';
    }

    const handleSortByChange = option => {
        setSearch({
            ...search,
            sortBy: option
        })
    }

    const handleTermChange = e => {
        setSearch({
            ...search,
            term: e.target.value
        })
    }

    const handleLocationChange = e => {
        setSearch({
            ...search,
            location: e.target.value
        })
    }

    const handleSearch = e => {
        searchYelp(term, location, sortBy);
        e.preventDefault();
    }

    return (
        <div className="SearchBar">
        <div className="SearchBar-sort-options">
            <ul>
                <SortByOptions 
                    sortByOptions={sortByOptions} 
                    isActiveOption={isActiveOption}
                    handleSortByChange={handleSortByChange}
                />
            </ul>
        </div>
        <div className="SearchBar-fields">
            <input onChange={handleTermChange} placeholder="Search Businesses" />
            <input onChange={handleLocationChange} placeholder="Where?" required />
        </div>
        <div className="SearchBar-submit">
            <button onClick={handleSearch}>Let's Go</button>
        </div>
        </div>
    )
}

const SortByOptions = props => {

    const { sortByOptions, isActiveOption, handleSortByChange } = props;

    return (
        Object.keys(sortByOptions).map(key => {
            let value = sortByOptions[key];
            return <li key={value} className={
                isActiveOption(value)} 
                onClick={() => handleSortByChange(value)}
            >{key}</li>
        })
    )
}

export default SearchBar;