import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from '../components/Search';
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDownSLine } from "react-icons/ri";

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
    const [showMenu, setMenu] = useState("0px");
    const [rotateIcon, setRotation] = useState("rotate-0");

    const checkScreen = () => {
        if (window.innerWidth >= 768) {
            setMenu("0px");
        }
    }

    useEffect(() => {
        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    });

    return (
        <>
            <header className="mb-10 max-md:mb-1">
                <nav className='flex items-center gap-6 w-full font-medium max-md:gap-2'>
                    <div className="logo text-3xl max-lg:text-3xl max-md:flex-1">
                        <Link to={"/"}>
                            Recipe Realm
                        </Link>
                    </div>
                    <div className='flex flex-grow justify-center items-center gap-16 max-md:hidden mr-4 tracking-widest'>
                        <Link to="/"
                            className="hover:text-red-500"
                        >
                            Home
                        </Link>
                        <div
                            className='relative hover:text-red-500 z-10 cursor-pointer max-md:hidden'
                            onMouseOver={() => {
                                let categories = document.querySelector(".category-container");
                                isHovered(`${categories.scrollHeight}px`);
                            }}
                            onMouseLeave={() => {
                                isHovered("0px");
                            }}

                            onClick={() => {
                                let categories = document.querySelector(".category-container");
                                isHovered(hovered == "0px" ? `${categories.scrollHeight}px` : "0px");
                            }}
                        >
                            <span className="flex items-center gap-1">Categories <RiArrowDownSLine className="h-5 w-5" /></span>
                            <div
                                className='absolute bg-slate-100 top-10 left-0 font-normal overflow-hidden rounded-md shadow-xl category-container transition-all delay-75'
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
                        <Link to={"/cuisines"}
                            className="hover:text-red-500"
                        >
                            Cuisines
                        </Link>
                    </div>
                    <Search className="justify-self-end" />
                    <div
                        className="hidden cursor-pointer max-md:flex hover:text-red-500"
                        onClick={() => {
                            let mbc = document.querySelector(".mobile-container");
                            setMenu(showMenu === "0px" ? `${mbc.scrollHeight}px` : "0px");
                            isHovered("0px");
                            setRotation("rotate-0")
                        }}
                    >
                        <GiHamburgerMenu className="h-5 w-5" />
                    </div>
                </nav>
            </header>
            <div
                className="mobile-container ml-2 z-10 tracking-widest flex flex-col gap-4 font-medium max-md:mb-10 overflow-hidden transition-all duration-300 ease-linear"
                style={{
                    maxHeight: `${showMenu}`
                }}
            >
                <Link to="/"
                    className="hover:text-red-500"
                >
                    Home
                </Link>
                <div
                    className='hover:text-red-500 z-10 cursor-pointer'
                    onClick={() => {
                        if (hovered == "0px") {
                            let categories = document.querySelector(".mbcategory-container");
                            let mbc = document.querySelector(".mobile-container");
                            isHovered(`${categories.scrollHeight}px`);
                            setMenu(`${mbc.scrollHeight + categories.scrollHeight}px`);
                            setRotation("-rotate-180")
                        } else {
                            isHovered("0px");
                            setRotation("rotate-0")
                        }
                    }}
                >
                    <div className="flex items-center">
                        Categories
                        <RiArrowDownSLine className={`h-5 w-5 ${rotateIcon} transition-all duration-200 ease-linear`} />
                    </div>
                    <div
                        className='bg-slate-100 font-normal overflow-hidden rounded-md shadow-xl mbcategory-container transition-all duration-200 ease-linear'
                        style={{
                            maxHeight: `${hovered}`,
                            marginTop: `${hovered == "0px" ? "0rem" : "0.4rem"}`
                        }}
                    >
                        <div className='overflow-hidden rounded-md z-20 items-center flex flex-col'>
                            {categories.map((category) => {
                                return (
                                    <Link to={`/category/${category.name}/0`}
                                        key={category.name}
                                        className='transition p-4 text-black duration-200 ease-in-out hover:bg-red-500 hover:text-white w-full'
                                    >
                                        {category.name}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <Link to={"/cuisines"}
                    className="hover:text-red-500"
                >
                    Cuisines
                </Link>
            </div>
        </>
    )
}

export default Navi