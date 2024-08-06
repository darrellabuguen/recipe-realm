import React, { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = (props) => {
    const page = props.page;
    const totalPages = props.total;
    const [nextBtn, setNextBtn] = useState("");
    const [prevBtn, setPrevBtn] = useState("");

    useEffect(() => {
        parseInt(page) + parseInt(totalPages) % 8 == totalPages ? setNextBtn("pointer-events-none opacity-55") : setNextBtn("");
        page == 0 ? setPrevBtn("pointer-events-none opacity-55") : setPrevBtn("");
    });

    return (
        <div className='flex items-center justify-center gap-2 mt-4'>
            <button
                className={`text-white border-2 border-black bg-black hover:border-red-500 hover:bg-white hover:text-red-500 rounded-md cursor-pointer p-2 flex items-center ${prevBtn}`}
                onClick={(e) => {
                    var page_number = document.querySelector(".page-number");
                    if (page != 0) {
                        let page_num = parseInt(page) - 8;
                        props.set(page_num);
                        page_number.value = page_num;
                        e.target.style.pointerEvents = "none";
                        setTimeout(() => {
                            e.target.style.pointerEvents = "all";
                        }, 1000);
                    }
                }}
            >
                <IoIosArrowBack className='w-5 h-5' />Prev
            </button>
            <input
                type="number"
                defaultValue={Math.round(parseInt(page / 8) + 1)}
                min="1"
                max={totalPages}
                className='page-number bg-black border-2 border-transparent text-white'
                id='page-number'
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        var value = parseInt(e.target.value);
                        if (value <= Math.ceil(parseInt(totalPages) / 8) && value > 0) {
                            props.set((value - 1) * 8);
                        }
                    }
                }}
            />
            <button
                className={`text-white border-2 border-black bg-black hover:border-red-500 hover:bg-white hover:text-red-500 rounded-md cursor-pointer p-2 flex items-center ${nextBtn}`}
                onClick={(e) => {
                    var page_number = document.querySelector(".page-number");
                    if (parseInt(page) + parseInt(totalPages) % 8 != parseInt(totalPages)) {
                        let value = parseInt(page) + 8;
                        props.set(value);
                        page_number.value = Math.round(parseInt(value / 8) + 1);
                        e.target.style.pointerEvents = "none";
                        setTimeout(() => {
                            e.target.style.pointerEvents = "all";
                        }, 1000);
                    }
                }}
            >
                Next<IoIosArrowForward className='w-5 h-5' />
            </button>
        </div>
    )
}

export default Pagination