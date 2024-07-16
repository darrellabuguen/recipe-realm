import React from 'react'
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";

const Categories = () => {
    const categories = [
        { name: "Appetizer" },
        { name: "Dessert" },
        { name: "Main Course" },
        { name: "Pasta" },
        { name: "Salad" },
        { name: "Soup" }
    ]
    return (
        <>
            <div className='w-1/2 m-auto'>
                <Splide
                    options={{
                        gap: "1rem",
                        perPage: "3",
                        pagination: false
                    }}
                >
                    {
                        categories.map(category => {
                            return (
                                <SplideSlide key={category.name}>
                                    <Link to={`/category/${category.name}/0`}>
                                        <div className="p-2 text-center">
                                            <h2>{category.name}</h2>
                                        </div>
                                    </Link>
                                </SplideSlide>
                            )
                        })
                    }
                </Splide>
            </div>
        </>
    )
}

export default Categories