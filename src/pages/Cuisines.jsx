import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../components/useFetch';

const Cuisines = () => {
    const { cuisinename } = useParams();
    const apiK = import.meta.env.REACT_APP_API_KEY;
    const cuisines = [
        { name: "African" }, { name: "Asian" }, { name: "American" },
        { name: "British" }, { name: "Cajun" }, { name: "Carribean" },
        { name: "Chinese" }, { name: "Eastern European" }, { name: "European" },
        { name: "French" }, { name: "German" }, { name: "Greek" },
        { name: "Indian" }, { name: "Irish" }, { name: "Italian" },
        { name: "Japanese" }, { name: "Jewish" }, { name: "Korean" },
        { name: "Latine American" }, { name: "Mediterranean" }, { name: "Mexican" },
        { name: "Middle Eastern" }, { name: "Nordic" }, { name: "Southern" },
        { name: "Spanish" }, { name: "Thai" }, { name: "Vietnamese" }
    ]

    if (cuisinename) {
        var { data, loading, error } = useFetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiK}&cuisine=${cuisinename}&number=8`);
    }

    return (
        <>
            <h1>{!cuisinename ? "Cuisines" : cuisinename}</h1>
            {!cuisinename &&
                <ul className='grid grid-cols-3 gap-4'>
                    {cuisines.map((cuisine) => (
                        <Link
                            to={`/cuisine/${cuisine.name}/0`}
                            key={cuisine.name}
                            className='border border-gray-200'
                        >
                            {cuisine.name}
                        </Link>
                    ))}
                </ul>
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