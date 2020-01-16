import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

function Home() {
    // const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`/events?_page=1&_limit=10`)
            .then((response) => {
                setData(response.data);
                console.log(response.data);
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    // function handleChange(e) {
    //     setSearch(e.target.value)
    // }

    function handleClick(e) {
        console.log(e.selected + 1);
        axios.get(`/events?_page=${e.selected + 1}&_limit=10`)
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function renderData(array) {
        console.log('array', array)
        return (
            <div>
                <ul style={{ listStyle: 'none' }}>
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
            {/* <input type="text"
                placeholder="Begin your search..."
                name="search"
                value={search}
                onChange={handleChange}></input> */}
            {renderData(data)}
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={100}
                marginPagesDisplayed={1}
                pageRangeDisplayed={5}
                onPageChange={handleClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'} />
        </div>
    )
}


export default Home;