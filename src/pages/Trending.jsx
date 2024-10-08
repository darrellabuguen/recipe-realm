import React from 'react'
import useFetch from '../components/useFetch'
import { Link, useNavigate } from 'react-router-dom';

const Trending = () => {
    const apiK = import.meta.env.REACT_APP_API_KEY;
    const { data, loading, error } = useFetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiK}&number=4`);
    const navigate = useNavigate();

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <>
            {data && (
                <>
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
                                    <span title={recipe.title} className='font-bold text-sm mt-2 line-clamp-1 cursor-pointer'
                                        onClick={() => {
                                            navigate(`/recipe/${recipe.title}/${recipe.id}`);
                                        }}
                                    >
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