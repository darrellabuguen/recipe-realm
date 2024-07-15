import React from 'react'
import { useParams } from 'react-router-dom'

const Category = () => {
    const { categoryname } = useParams();
    const title = document.querySelector("title");
    title.innerText = `${categoryname} - Category`; //change title to category name

    return (
        <div>{categoryname}</div>
    )
}

export default Category