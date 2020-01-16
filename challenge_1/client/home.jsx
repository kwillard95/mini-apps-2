import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paginate from './paginate.jsx'

function Home() {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`/events?_page=1&_limit=10`)
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    function handleChange(e) {
        setSearch(e.target.value);
    }

    function handleSearchClick(e) {
        e.preventDefault();
        axios.get(`/events?/_page=1&_limit=10&q=${search}`)
        .then((response) => {
            setData(response.data);
            setSearch('');
        })
        .catch((err) => {
            console.log(err)
        })
    }

    function handlePageClick(e) {
        axios.get(`/events?_page=${e.selected + 1}&_limit=10&q=${search}`)
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function renderData(array) {
        return (
            <div>
                <ul style={{ listStyle: 'none' }} onChange={handleChange}>
                    {array.map((list) => {
                        return (
                            <li>{list.description}</li>
                        )
                    })}
                </ul>
            </div>

        )
    }

    return (
        <div>
            <h2>Library of Historical Events</h2>
            <input type="text"
                placeholder="Begin your search..."
                name="search"
                value={search}
                onChange={handleChange}></input> 
            <button onClick={handleSearchClick}>Search</button>
            {renderData(data)}
            <Paginate handleClick={handlePageClick} />
        </div>
    )
}


export default Home;