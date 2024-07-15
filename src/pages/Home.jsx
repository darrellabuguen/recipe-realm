import React from 'react'
import { Link } from 'react-router-dom'
import Categories from '../components/Categories'
import Search from '../components/Search';

const Home = () => {
    const title = document.querySelector("title");
    title.innerText = `Recipe Realm`; //change title

    return (
        <>
            <header>
                <nav>
                    <Link to={"/"} className="logo text-2xl">Recipe Realm</Link>
                </nav>
            </header>
            <Search />
            <Categories />
        </>
    )
}

export default Home