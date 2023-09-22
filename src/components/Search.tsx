import { MdSearch } from "react-icons/md"
import { useState } from "react";

export default function Search({handleSearch}: any) {
    return (
        <div className='search'>
            <MdSearch className='search-icon' size='1.3em'></MdSearch>
            <input 
                type='text'
                placeholder='Type to search a note...'
                onChange={(event) => handleSearch(event.target.value)}
            ></input>
        </div>
    )
}