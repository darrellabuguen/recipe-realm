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
                        pagination: false,
                        gap: "1rem",
                        drag: "free",
                        padding: "8%",
                        perPage: "3"
                    }}
                >
                    {
                        categories.map(category => {
                            return (
                                <SplideSlide
                                    key={category.name}
                                    className='bg-gray-200 rounded-lg'
                                >
                                    <Link to={`/category/${category.name}/0`}>
                                        <div className="p-1 text-center">
                                            <h2 className='line-clamp-1'>{category.name}</h2>
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