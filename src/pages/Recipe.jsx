import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../components/useFetch';
import { LuPrinter } from "react-icons/lu";
import Similar from '../components/Similar';

const Recipe = () => {
    const { recipetitle, recipeid } = useParams();
    const apiK = import.meta.env.REACT_APP_API_KEY;
    const { data, loading, error } = useFetch(`https://api.spoonacular.com/recipes/${recipeid}/information?includeNutrition=true&apiKey=${apiK}`);
    const nutri_arr = [
        { name: "Calories", nutri_index: "0" },
        { name: "Fat", nutri_index: "1" },
        { name: "Saturated Fat", nutri_index: "2" },
        { name: "Cholesterol", nutri_index: "6" },
        { name: "Carbohydrates", nutri_index: "3" },
        { name: "Sugar", nutri_index: "5" },
        { name: "Protein", nutri_index: "9" },
        { name: "Sodium", nutri_index: "7" },
        { name: "Fiber", nutri_index: "22" },
    ];

    const title = document.querySelector("title");
    title.innerText = `${recipetitle} - Recipe`; //change title

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <>
            {data && (
                <>
                    <h1 className='font-medium text-3xl font-serif'
                        style={{
                            fontFamily: "Libre Baskerville, serif",
                        }}
                    >
                        {data.title}
                    </h1>
                    <div className='my-3'>
                        <span className='text-sm text-gray-500'>
                            {data.aggregateLikes} likes
                        </span>{" "}
                        | {" "}
                        <Link to={data.sourceUrl}
                            className='text-sm text-gray-500 hover:text-red-500 break-words'
                        >
                            {data.sourceUrl}
                        </Link>
                    </div>
                    <div className='mt-10'>
                        <img src={
                            data.image.replace("556x370", "636x393")    //change image size
                        }
                            alt="img"
                            className='rounded-lg max-w-screen-lg'
                        />
                    </div>
                    <div className='flex mt-10 leading-8 gap-4 max-md:flex-col'>
                        <div className='w-3/5 max-md:w-full'>
                            <ul className='flex items-center'>
                                <li className='text-sm border-r pr-6'>
                                    <small className='block text-gray-500'>PREP TIME</small>
                                    <span className='text-base'>{data.readyInMinutes} MIN</span>
                                </li>
                                <li className='text-sm border-r pl-2 pr-6'>
                                    <small className='block text-gray-500'>SERVINGS</small>
                                    <span className='text-base'>{data.servings} PEOPLE</span>
                                </li>
                                <li
                                    className='pl-2 pr-4 cursor-pointer'
                                    onClick={() => {
                                        window.print();
                                    }}
                                >
                                    <LuPrinter />
                                </li>
                            </ul>
                            <h2 className='font-medium text-2xl mt-10'
                                style={{
                                    fontFamily: "Libre Baskerville, serif"
                                }}
                            >
                                Ingredients
                            </h2>
                            <ul className='list-disc'>
                                {data.extendedIngredients.map((ing) => {
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
                                                name={ing.name}
                                                id={ing.nameClean}
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
                        <div className='w-2/5  max-md:w-full'>
                            <div className='bg-slate-100 p-4 rounded-md'>
                                <h2 className='font-medium text-2xl mb-4'
                                    style={{
                                        fontFamily: "Libre Baskerville, serif"
                                    }}
                                >
                                    Nutrition Facts
                                </h2>
                                <ul>
                                    {
                                        nutri_arr.map((nutrient, index) => {
                                            return (
                                                <li key={nutrient.name}>
                                                    <div className='flex items-center justify-between'>
                                                        <span className='text-gray-500'>
                                                            {nutrient.name}
                                                        </span>
                                                        <span>
                                                            {data.nutrition.nutrients[nutrient.nutri_index].amount}
                                                            {data.nutrition.nutrients[nutrient.nutri_index].unit}
                                                        </span>
                                                    </div>
                                                    {index !== nutri_arr.length - 1 &&
                                                        <hr className='border border-gray-500 rounded-md' />
                                                    }
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <Similar id={recipeid}
                                style={{
                                    float: "right"
                                }}
                            />
                        </div>
                    </div>
                </>
            )}

        </>
    )
}

export default Recipe