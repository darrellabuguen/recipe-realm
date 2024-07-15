import React from 'react'
import { useParams } from 'react-router-dom'

const SearchResult = () => {
    const { query } = useParams();
    const title = document.querySelector("title");
    title.innerText = `${query} - Search Results`; //change title to query string

    return (
        <div>search result for <b>{query}</b></div>
    )
}

export default SearchResult