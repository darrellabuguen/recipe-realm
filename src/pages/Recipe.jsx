import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../components/useFetch';

const Recipe = () => {
    const { recipeid } = useParams();
    const apiK = import.meta.env.REACT_APP_API_KEY;
    const { data, loading, error } = useFetch(`https://api.spoonacular.com/recipes/${recipeid}/information?apiKey=${apiK}&includeNutrition=false`);

    const title = document.querySelector("title");
    title.innerText = `${data.title} - Recipe`; //change title

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <>
            {data && (
                <>
                    <img src={data.image} alt="img" />
                </>
            )}

        </>
    )
}

export default Recipe