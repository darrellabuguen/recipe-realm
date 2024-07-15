import React from 'react'
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const navigate = useNavigate();
    return (
        <div className='my-4 flex justify-center gap-1'>
            <input type="search"
                className='border outline-none rounded-md bg-gray-200 pl-1 focus:border-gray-400 transition delay-75 ease-in-out'
                autoComplete='off'
                placeholder='search'
                id='search'
                onKeyDown={(e) => {
                    if (e.key == "Enter" && e.target.value.length > 0) {
                        navigate(`/search/${e.target.value}/0`);
                    }
                }}
            />
            <button
                className='p-2 bg-gray-200 outline-none rounded-md hover:bg-gray-400 transition delay-75 ease-in-out'
                onClick={() => {
                    const query = document.querySelector('input[type="search"]').value;
                    navigate(`/search/${query}/0`)
                }}
            >
                <IoSearch />
            </button>
        </div>
    )
}

export default Search