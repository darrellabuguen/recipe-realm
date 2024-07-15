import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useFetch from '../components/useFetch';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SearchResult = () => {
    const { query, pagenum } = useParams();
    const apiK = import.meta.env.REACT_APP_API_KEY;
    const navigate = useNavigate();
    const title = document.querySelector("title");

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
                            <div className='flex items-center justify-between'>
                                <div>search result for <b>{query}</b></div>
                                <div>showing {Math.round(parseInt(pagenum / 8) + 1)} of {Math.round(parseInt(data.totalResults) / 8)}</div>
                            </div>
                            <div className='grid grid-cols-4 gap-3'>
                                {data.results.map((recipe) => (
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
                                ))}
                            </div>
                            <div className='flex items-center gap-3 justify-center'>
                                <button
                                    className='w-5 h-5 rounded-full'
                                    onClick={() => {
                                        if (pagenum == 0) {
                                            return alert('No more pages to display');
                                        } else {
                                            navigate(`/search/${query}/${parseInt(pagenum) - 8}`);
                                        }
                                    }}
                                >
                                    <IoIosArrowBack />
                                </button>
                                <input type="number"
                                    name="pagenumber"
                                    id="pagenumber"
                                    onKeyDown={(e) => {
                                        if (e.key == "Enter") {
                                            var page = parseInt(e.target.value);
                                            if (page <= parseInt(data.totalResults) && page > 0) {
                                                navigate(`/search/${query}/${(page - 1) * 8}`);
                                            }
                                        }
                                    }}
                                />
                                <button
                                    className='w-5 h-5 rounded-full'
                                    onClick={() => {
                                        if (Math.round(parseInt(pagenum / 8) + 1) == parseInt(data.totalResults)) {
                                            return alert('No more pages to display');
                                        } else {
                                            navigate(`/search/${query}/${parseInt(pagenum) + 8}`);
                                        }
                                    }}
                                >
                                    <IoIosArrowForward />
                                </button>
                            </div>
                        </>
                    }
                </>
            )}
        </>
    )
}

export default SearchResult