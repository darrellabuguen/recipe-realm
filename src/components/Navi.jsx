import { useState } from "react";
import { Link } from "react-router-dom";
import Search from '../components/Search';

const Navi = () => {
    const categories = [
        { name: "Appetizer" },
        { name: "Dessert" },
        { name: "Main Course" },
        { name: "Pasta" },
        { name: "Salad" },
        { name: "Soup" }
    ]
    const [hovered, isHovered] = useState("0px");

    return (
        <>
            <header>
                <nav className='flex items-center font-medium'>
                    <div className="logo text-2xl flex-1">
                        <Link to={"/"}
                            style={{
                                textShadow: "1px 1px 3px #323232"
                            }}
                        >
                            Recipe Realm
                        </Link>
                    </div>
                    <div className='flex items-center gap-6 flex-1'>
                        <Link to="/"
                            className="hover:text-red-500"
                        >
                            Home
                        </Link>
                        <div
                            className='relative hover:text-red-500 z-10 cursor-pointer'
                            onMouseOver={() => {
                                let categories = document.querySelector(".category-container");
                                isHovered(`${categories.scrollHeight}px`);
                            }}
                            onMouseLeave={() => {
                                isHovered("0px");
                            }}
                        >
                            Categories
                            <div
                                className='absolute bg-slate-100 left-0 font-normal overflow-hidden rounded-md shadow-xl category-container transition-all delay-75'
                                style={{
                                    maxHeight: `${hovered}`
                                }}
                            >
                                <div className='overflow-hidden rounded-md items-center flex flex-col w-60'>
                                    {categories.map((category) => {
                                        return (
                                            <Link to={`/category/${category.name}/0`}
                                                key={category.name}
                                                className='transition p-4 text-black duration-300 ease-in-out hover:bg-red-500 hover:text-white w-full'
                                            >
                                                {category.name}
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <Search />
        </>
    )
}

export default Navi