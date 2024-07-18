import { Link } from 'react-router-dom';
import useFetch from './useFetch';

const Similar = (props) => {
    const id = props.id;
    const apiK = import.meta.env.REACT_APP_API_KEY;
    const { data, loading, error } = useFetch(`https://api.spoonacular.com/recipes/${id}/similar?number=4&apiKey=${apiK}`);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <>
            {data && (
                <>
                    <h2 className='font-medium text-2xl mt-16'
                        style={{
                            fontFamily: "Libre Baskerville, serif"
                        }}
                    >Similar Recipes</h2>
                    <div className='grid grid-rows-4 gap-3 my-3'>
                        {data.map((recipe) => {
                            return (
                                <div key={recipe.id} className='w-full rounded-md'>
                                    <Link to={`/recipe/${recipe.title}/${recipe.id}`}>
                                        <img src={`https://img.spoonacular.com/recipes/${recipe.id}-240x150.jpg`}
                                            alt={recipe.title}
                                            className='rounded-md'
                                        />
                                        <figcaption className='mt-2'
                                            style={{
                                                width: "240px"
                                            }}
                                        >
                                            <h3 className='font-medium text-lg'>
                                                {recipe.title}
                                            </h3>
                                            <small>PREP TIME: {recipe.readyInMinutes}</small>
                                        </figcaption>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </>
            )
            }
        </>
    )
}

export default Similar