import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

function Home() {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);

    function handleChange(e) {
        setSearch(e.target.value)
    }

    function handleClick(e) {
        console.log(e);
        axios.get(`/events?_page=${e.selected}&_limit=10`)
        .then((response) => {
            console.log(response.data)
            setData(response.data);
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <h2>Library of Historical Events</h2>
            <input type="text"
                placeholder="Begin your search..."
                name="search"
                value={search}
                onChange={handleChange}></input>

            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={100}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handleClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'} />
        </div>
    )
}


export default Home;