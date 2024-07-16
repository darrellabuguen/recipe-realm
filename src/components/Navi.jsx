import { useState } from "react";
import { Link } from "react-router-dom";

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
                <nav className='flex items-center'>
                    <Link to={"/"}
                        className="logo text-2xl flex-1"
                        style={{
                            textShadow: "1px 1px 3px #323232"
                        }}
                    >
                        Recipe Realm
                    </Link>
                    <div className='flex items-center gap-6 flex-1'>
                        <Link to="/"
                            className="hover:text-red-500"
                        >
                            Home
                        </Link>
                        <div
                            className='relative hover:text-red-500'
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
                                className='absolute left-0 overflow-hidden rounded-md shadow-lg category-container transition-all delay-75'
                                style={{
                                    maxHeight: `${hovered}`
                                }}
                            >
                                <div className='border overflow-hidden rounded-md items-center flex flex-col w-60'>
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
        </>
    )
}

export default Navi