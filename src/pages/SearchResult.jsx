import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useFetch from '../components/useFetch';
import Pagination from '../components/Pagination';

const SearchResult = () => {
    const { query, pagenum } = useParams();
    const apiK = import.meta.env.REACT_APP_API_KEY;
    const navigate = useNavigate();
    const title = document.querySelector("title");

    const setPageNumber = (number) => {
        navigate(`/search/${query}/${number}`);
    }

    const { data, loading, error } = useFetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiK}&query=${query}&number=8&offset=${pagenum}`);

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
                            <div className='flex items-center justify-between mb-4'>
                                <div>result for <b className='text-red-500'>{query}</b></div>
                                <div>showing {Math.round(parseInt(pagenum / 8) + 1)} of {Math.ceil(parseInt(data.totalResults) / 8)}</div>
                            </div>
                            <div className='grid grid-cols-4 gap-4 mb-4 max-sm:grid-cols-1 max-md:grid-cols-2'>
                                {data.results.map((recipe) => (
                                    <div
                                        key={recipe.id}
                                        className='flex flex-col hover:text-red-500'
                                    >
                                        <Link to={`/recipe/${recipe.title}/${recipe.id}`}
                                            key={recipe.id}
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
                                ))}
                            </div>
                            <Pagination page={pagenum} total={data.totalResults} set={setPageNumber} />
                        </>
                    }
                </>
            )}
        </>
    )
}

export default SearchResult