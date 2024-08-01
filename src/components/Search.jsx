import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { MdClose } from "react-icons/md";

const Search = () => {
    const navigate = useNavigate();
    const [isVisible, setVisibility] = useState("hidden");
    const [isInFront, setZIndex] = useState("z-0");
    return (
        <div className='flex justify-center'>
            <div className={`absolute top-0 left-0 w-full h-16 ${isVisible} ${isInFront} flex items-center bg-slate-100`}
                onFocus={() => {
                    setVisibility("block");
                    setZIndex("z-20");
                }}

                onBlur={() => {
                    setVisibility("hidden");
                    setZIndex("z-0");
                }}
            >
                <input type="search"
                    className='w-full h-full outline-none pl-4 p-2 bg-transparent border-b-2 border-black focus:border-red-500'
                    autoComplete='off'
                    placeholder='search'
                    style={{
                        maxWidth: "1100px",
                        margin: "auto"
                    }}
                    id='search'
                    onKeyDown={(e) => {
                        if (e.key == "Enter" && e.target.value.length > 0) {
                            navigate(`/search/${e.target.value}/0`);
                        }
                    }}
                />
                <span
                    className='absolute right-0 mr-4 cursor-pointer rounded-full hover:bg-slate-400 p-3 hover:text-white'
                    onClick={() => {
                        setVisibility("hidden");
                        setZIndex("z-0");
                    }}
                >
                    <MdClose className='h-5 w-5' />
                </span>
            </div>
            <button
                className=' outline-none rounded-md transition delay-75 ease-in-out hover:text-red-500'
                onClick={() => {
                    setVisibility(isVisible == "hidden" ? "block" : "hidden");
                    setZIndex(isInFront == "z-0" ? "z-20" : "z-0");
                }}
            >
                <IoSearch className='w-5 h-5' />
            </button>
        </div>
    )
}

export default Search