import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useFetch from '../components/useFetch';
import Pagination from '../components/Pagination';

const CuisinePage = () => {
    const { cuisinename, pagenum } = useParams();
    const title = document.querySelector("title");
    const apiK = import.meta.env.REACT_APP_API_KEY;
    const navigate = useNavigate();

    const setPageNumber = (number) => {
        navigate(`/category/${cuisinename}/${number}`);
    }

    const { data, loading, error } = useFetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiK}&cuisine=${cuisinename}&number=8`);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    title.innerText = `${cuisinename} - Cuisine`; //change title

    return (
        <>
            <div className=' mt-6 flex items-center justify-between mb-4'>
                <h1 className='border-l-4 border-red-500 font-bold text-lg pl-2'>
                    {cuisinename}
                </h1>
                <div>showing {Math.round(parseInt(pagenum / 8) + 1)} of {Math.ceil(parseInt(data.totalResults) / 8)}</div>
            </div>
            {data &&
                <div className='grid grid-cols-4 gap-4 mb-4 max-sm:grid-cols-1 max-md:grid-cols-2'>
                    {data.results.map((recipe) => {
                        return (
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
            }
            <Pagination page={pagenum} total={data.totalResults} set={setPageNumber} />
        </>
    )
}

export default CuisinePage