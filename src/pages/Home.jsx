import React from 'react'
import { Link } from 'react-router-dom'
import Categories from '../components/Categories'

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
            <Categories />
        </>
    )
}

export default Home