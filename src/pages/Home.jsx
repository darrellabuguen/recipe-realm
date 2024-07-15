import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <header>
                <nav>
                    <Link to={"/"} className="logo">Recipe Realm</Link>
                </nav>
            </header>
        </>
    )
}

export default Home