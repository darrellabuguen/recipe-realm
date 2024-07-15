import React from 'react'
import { Link } from 'react-router-dom'
import Categories from '../components/Categories'
import Search from '../components/Search';
import Trending from './Trending';
import Other from './Other';

const Home = () => {
    const title = document.querySelector("title");
    title.innerText = `Recipe Realm`; //change title

    return (
        <>
            <header>
                <nav>
                    <Link to={"/"}
                        className="logo text-2xl"
                        style={{
                            textShadow: "1px 1px 3px #323232"
                        }}
                    >
                        Recipe Realm
                    </Link>
                </nav>
            </header>
            <Search />
            <Categories />
            <Trending />
            <Other />
        </>
    )
}

export default Home