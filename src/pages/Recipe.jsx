import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../components/useFetch';

const Recipe = () => {
    const { recipetitle, recipeid } = useParams();
    const apiK = import.meta.env.REACT_APP_API_KEY;
    const { data, loading, error } = useFetch(`https://api.spoonacular.com/recipes/${recipeid}/information?includeNutrition=true&apiKey=${apiK}`);

    const title = document.querySelector("title");
    title.innerText = `${recipetitle} - Recipe`; //change title

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    console.log(data);

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
                            className='line-clamp-5 leading-8'
                            dangerouslySetInnerHTML={{ __html: data.summary }}
                        ></p>
                    </div>
                    <div className='flex mt-6 leading-8'>
                        <div className='w-1/2'>
                            <h2 className='font-medium text-2xl'
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
                                                    ingname.style.color = "black"
                                                } else {
                                                    checkbox.checked = true;
                                                    ingname.style.textDecoration = "line-through";
                                                    ingname.style.color = "gray"
                                                }
                                            }}
                                        >
                                            <input
                                                type="checkbox"
                                                name={ing.original}
                                                id={ing.original}
                                                className=' pointer-events-none transition-all delay-75'
                                            />
                                            <p className='pointer-events-none transition-all delay-75'>{ing.original}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                            <h2 className='font-medium text-2xl mt-6'
                                style={{
                                    fontFamily: "Libre Baskerville, serif"
                                }}
                            >
                                Instructions
                            </h2>
                            <div dangerouslySetInnerHTML={{ __html: data.instructions }}></div>
                        </div>
                        <div className='w-1/2'>
                            <div className='bg-slate-100 p-4 rounded-md'>
                                <h2 className='font-medium text-2xl mb-4'
                                    style={{
                                        fontFamily: "Libre Baskerville, serif"
                                    }}
                                >
                                    Nutrition Facts
                                </h2>
                                <ul>
                                    <li className='flex items-center justify-between'>
                                        <span className='text-slate-700'>
                                            Calories
                                        </span>
                                        <span>
                                            {data.nutrition.nutrients[0].amount}
                                            {data.nutrition.nutrients[0].unit}
                                        </span>
                                    </li>
                                    <hr className='border border-slate-500 rounded-md' />
                                    <li className='flex items-center justify-between'>
                                        <span className='text-slate-700'>
                                            Fat
                                        </span>
                                        <span>
                                            {data.nutrition.nutrients[1].amount}
                                            {data.nutrition.nutrients[1].unit}
                                        </span>
                                    </li>
                                    <hr className='border border-slate-500 rounded-md' />
                                    <li className='flex items-center justify-between'>
                                        <span className='text-slate-700'>
                                            Saturated Fat
                                        </span>
                                        <span>
                                            {data.nutrition.nutrients[2].amount}
                                            {data.nutrition.nutrients[2].unit}
                                        </span>
                                    </li>
                                    <hr className='border border-slate-500' />
                                    <li className='flex items-center justify-between'>
                                        <span className='text-slate-700'>
                                            Cholesterol
                                        </span>
                                        <span>
                                            {data.nutrition.nutrients[6].amount}
                                            {data.nutrition.nutrients[6].unit}
                                        </span>
                                    </li>
                                    <hr className='border border-slate-500' />
                                    <li className='flex items-center justify-between'>
                                        <span className='text-slate-700'>
                                            Carbohydrates
                                        </span>
                                        <span>
                                            {data.nutrition.nutrients[3].amount}
                                            {data.nutrition.nutrients[3].unit}
                                        </span>
                                    </li>
                                    <hr className='border border-slate-500' />
                                    <li className='flex items-center justify-between'>
                                        <span className='text-slate-700'>
                                            Sugar
                                        </span>
                                        <span>
                                            {data.nutrition.nutrients[5].amount}
                                            {data.nutrition.nutrients[5].unit}
                                        </span>
                                    </li>
                                    <hr className='border border-slate-500' />
                                    <li className='flex items-center justify-between'>
                                        <span className='text-slate-700'>
                                            Protein
                                        </span>
                                        <span>
                                            {data.nutrition.nutrients[9].amount}
                                            {data.nutrition.nutrients[9].unit}
                                        </span>
                                    </li>
                                    <hr className='border border-slate-500' />
                                    <li className='flex items-center justify-between'>
                                        <span className='text-slate-700'>
                                            Sodium
                                        </span>
                                        <span>
                                            {data.nutrition.nutrients[7].amount}
                                            {data.nutrition.nutrients[7].unit}
                                        </span>
                                    </li>
                                    <hr className='border border-slate-500' />
                                    <li className='flex items-center justify-between'>
                                        <span className='text-slate-700'>
                                            Fiber
                                        </span>
                                        <span>
                                            {data.nutrition.nutrients[22].amount}
                                            {data.nutrition.nutrients[22].unit}
                                        </span>
                                    </li>
                                    <hr className='border border-slate-500' />
                                </ul>
                            </div>
                        </div>
                    </div>
                </>
            )}

        </>
    )
}

export default Recipe