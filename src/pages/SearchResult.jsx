import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useFetch from '../components/useFetch';

const SearchResult = () => {
    const { query } = useParams();
    const apiK = import.meta.env.REACT_APP_API_KEY;
    const ofset = 0; //would change when next btn is clicked
    const title = document.querySelector("title");

    const { data, loading, error } = useFetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiK}&query=${query}&number=8&offset=${ofset}`);

    title.innerText = `${query} - Search Results`; //change title to query string

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <>
            {data && (
                <>
                    {data.totalResults == 0 && <div>No result found</div>}
                    {data.totalResults >= 1 &&
                        <>
                            <div className='flex items-center justify-between'>
                                <div>search result for <b>{query}</b></div>
                                <div>showing {ofset + 1} of {data.totalResults}</div>
                            </div>
                            <div className='grid grid-cols-4 gap-3'>
                                {data.results.map((recipe) => (
                                    <Link to={`/recipe/${recipe.title}/${recipe.id}`}
                                        key={recipe.id}
                                        className='hover:scale-105 relative rounded-lg overflow-hidden'>
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
                                ))}
                            </div>
                        </>
                    }
                </>
            )}
        </>
    )
}

export default SearchResult