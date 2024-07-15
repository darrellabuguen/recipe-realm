import React from 'react'
import useFetch from '../components/useFetch'
import { Link } from 'react-router-dom';

const Trending = () => {
    const apiK = import.meta.env.REACT_APP_API_KEY;
    const { data, loading, error } = useFetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiK}&number=4`);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <>
            {data && (
                <>
                    <h1 className=' font-bold text-lg mt-4'>Trending Recipes</h1>
                    <div className='grid grid-cols-4 gap-3'>
                        {data.recipes.map((recipe) => {
                            return (
                                <Link to={`recipe/${recipe.title}/${recipe.id}`}
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
                </>
            )}

        </>
    )
}

export default Trending