import React from 'react'
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const navigate = useNavigate();
    return (
        <div className='flex justify-center gap-1'>
            <input type="search"
                className='border-2 border-black outline-none rounded-md pl-1 focus:border-red-500 transition delay-75 ease-in-out'
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
                className=' outline-none rounded-md transition delay-75 ease-in-out hover:text-red-500'
                onClick={() => {
                    const query = document.querySelector('input[type="search"]').value;
                    navigate(`/search/${query}/0`)
                }}
            >
                <IoSearch className='w-5 h-5' />
            </button>
        </div>
    )
}

export default Search