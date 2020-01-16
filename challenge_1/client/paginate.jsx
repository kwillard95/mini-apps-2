import React from 'react';
import ReactPaginate from 'react-paginate';


function Paginate (props) {
    return(
        <div>
            <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={props.pageCount/10}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={5}
                    onPageChange={props.handleClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'} />
        </div>
    )
}

export default Paginate;