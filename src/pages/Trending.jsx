import React from 'react'
import useFetch from '../components/useFetch'
import { Link } from 'react-router-dom';

const Trending = () => {
    const apiK = import.meta.env.REACT_APP_API_KEY;
    const { data, loading, error } = useFetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiK}&number=8`);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <>
            {data && (
                <>
                    <h1 className=' font-bold text-lg mt-4'>Trending Recipes</h1>
                    <div className='grid grid-cols-4'>
                        {data.recipes.map((recipe) => {
                            return (
                                <Link to={`recipe/${recipe.id}`} key={recipe.id} className='p-2'>
                                    <img src={`${recipe.image}`} alt={recipe.title} className='w-full h-48 object-cover' />
                                    <h2 title={recipe.title}
                                        className='font-bold text-sm mt-2 line-clamp-1'>
                                        {recipe.title}
                                    </h2>
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