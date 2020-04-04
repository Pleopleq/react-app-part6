import React from 'react'

const SearchBar = ({value, onChange}) =>{
    return (
     <div>
    <label>Filter by name:</label> <input
    value={value} 
    onChange={onChange}/>
    </div>
    )
}

export default SearchBar