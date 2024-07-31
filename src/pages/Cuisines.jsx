import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../components/useFetch';

const Cuisines = () => {
    const { cuisinename } = useParams();
    const title = document.querySelector("title");
    const apiK = import.meta.env.REACT_APP_API_KEY;
    const cuisines = [
        { name: "African", image: "../src/assets/african.jpg" },
        { name: "Asian", image: "../src/assets/asian.jpg" },
        { name: "American", image: "../src/assets/american.jpg" },
        { name: "British", image: "../src/assets/british.jpg" },
        { name: "Chinese", image: "../src/assets/chinese.jpg" },
        { name: "European", image: "../src/assets/european.jpg" },
        { name: "French", image: "../src/assets/french.jpg" },
        { name: "German", image: "../src/assets/german.jpeg" },
        { name: "Greek", image: "../src/assets/greek.jpg" },
        { name: "Indian", image: "../src/assets/indian.jpg" },
        { name: "Irish", image: "../src/assets/irish.jpg" },
        { name: "Italian", image: "../src/assets/italian.jpg" },
        { name: "Japanese", image: "../src/assets/japanese.jpg" },
        { name: "Jewish", image: "../src/assets/jewish.jpg" },
        { name: "Korean", image: "../src/assets/korean.jpg" },
        { name: "Spanish", image: "../src/assets/spanish.webp" },
        { name: "Thai", image: "../src/assets/thai.jpg" },
        { name: "Vietnamese", image: "../src/assets/vietnamese.jpg" }
    ]

    if (cuisinename) {
        var { data, loading, error } = useFetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiK}&cuisine=${cuisinename}&number=8`);
    }

    if (error) return <p>Error: {error}</p>

    title.innerText = cuisinename ? `${cuisinename} - Cuisine` : `Cuisines - Recipe Realm`; //change title

    return (
        <>
            <h1 className='font-medium text-2xl mb-4'>{!cuisinename ? "Cuisines" : cuisinename}</h1>
            {!cuisinename &&
                <div className='grid grid-cols-4 gap-4 max-sm:grid-cols-2 max-md:grid-cols-2 max-lg:grid-cols-3'>
                    {cuisines.map((cuisine) => (
                        <div key={cuisine.name}
                            className='cursor-pointer text-center font-semibold hover:text-red-500'
                        >
                            <figure
                                className='rounded-full w-60 h-60 max-sm:w-auto max-sm:h-28'
                                style={{
                                    overflow: "hidden",
                                    margin: "auto"
                                }}
                            >
                                <Link
                                    to={`/cuisine/${cuisine.name}/0`}
                                >
                                    <img src={cuisine.image}
                                        alt={cuisine.name}
                                        className='w-full h-full object-cover transition-all duration-1000 hover:scale-105'
                                        style={{
                                            transitionTimingFunction: "easeInOut"
                                        }}
                                    />
                                </Link>
                            </figure>
                            <figcaption>{cuisine.name}</figcaption>
                        </div>
                    ))}
                </div>
            }

            {data &&
                <div className='grid grid-cols-4 gap-3'>
                    {data.results.map((recipe) => {
                        return (
                            <Link to={`/recipe/${recipe.title}/${recipe.id}`}
                                key={recipe.id}
                                className='transition delay-75 hover:scale-105 relative rounded-lg overflow-hidden'>
                                <img src={`${recipe.image}`}
                                    alt={recipe.title}
                                    className='w-full h-48 object-cover shadow-md'
                                />
                                <div
                                    className='absolute top-0 left-0 p-3 h-full w-full flex flex-col justify-end'
                                    style={{
                                        color: 'white',
                                        background: "linear-gradient(to bottom, rgba(250,250,250,0), rgba(0,0,0,0.8))"
                                    }}
                                >
                                    <h2 title={recipe.title}
                                        className='font-bold text-sm mt-2 line-clamp-1'>
                                        {recipe.title}
                                    </h2>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            }
        </>
    )
}

export default Cuisines