import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../components/useFetch';

const Recipe = () => {
    const { recipetitle, recipeid } = useParams();
    const apiK = import.meta.env.REACT_APP_API_KEY;
    const { data, loading, error } = useFetch(`https://api.spoonacular.com/recipes/${recipeid}/information?apiKey=${apiK}`);

    const title = document.querySelector("title");
    title.innerText = `${recipetitle} - Recipe`; //change title

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <>
            {data && (
                <>
                    <h1 className='font-medium text-5xl font-serif'
                        style={{
                            fontFamily: "Libre Baskerville, serif",
                        }}
                    >
                        {data.title}
                    </h1>
                    <div className='flex gap-4 mt-6'>
                        <img src={
                            data.image.replace("556x370", "636x393")
                        }
                            alt="img"
                            className='rounded-lg'
                        />
                        <p
                            className='line-clamp-5'
                            dangerouslySetInnerHTML={{ __html: data.summary }}
                        ></p>
                    </div>
                    <div>
                        <div>
                            <h2 className='font-medium text-2xl mt-6'
                                style={{
                                    fontFamily: "Libre Baskerville, serif"
                                }}
                            >
                                Ingredients
                            </h2>
                            <ul className='list-disc'>
                                {data.extendedIngredients.map(ing => {
                                    return (
                                        <li key={ing.id}
                                            className=' list-none flex items-center gap-4'
                                            onClick={(e) => {
                                                let checkbox = e.target.firstChild;
                                                let ingname = e.target.lastChild;

                                                if (checkbox.checked == true) {
                                                    checkbox.checked = false
                                                    ingname.style.textDecoration = "none";
                                                } else {
                                                    checkbox.checked = true;
                                                    ingname.style.textDecoration = "line-through";
                                                }
                                            }}
                                        >
                                            <input
                                                type="checkbox"
                                                name={ing.original}
                                                id={ing.original}
                                                className=' pointer-events-none'
                                            />
                                            <p className='pointer-events-none'>{ing.original}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </>
            )}

        </>
    )
}

export default Recipe