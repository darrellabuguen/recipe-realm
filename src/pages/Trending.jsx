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
                    <h1 className='border-l-4 border-red-500 font-bold text-lg pl-2 mt-4 mb-4'>Trending Recipes</h1>
                    <div className='grid grid-cols-4 gap-4 max-sm:grid-cols-1 max-md:grid-cols-2'>
                        {data.recipes.map((recipe) => {
                            return (
                                <div
                                    key={recipe.id}
                                    className='flex flex-col hover:text-red-500'
                                >
                                    <Link to={`recipe/${recipe.title}/${recipe.id}`}
                                        className='transition h-64 w-full rounded-lg overflow-hidden'>
                                        <img src={`${recipe.image}`}
                                            alt={recipe.title}
                                            className='w-full h-full object-cover shadow-md hover:scale-105 transition-all duration-1000'
                                        />
                                    </Link>
                                    <span title={recipe.title} className='font-bold text-sm mt-2 line-clamp-1 cursor-pointer'>
                                        {recipe.title}
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                </>
            )}

        </>
    )
}

export default Trending