import React, { useState } from 'react'
import { Link } from 'react-router-dom';
function Navbar({filterBySearch}) {
    const [searchValue, setSearchValue] = useState("");
    const onSearch = (e) => {
        e.preventDefault()
        filterBySearch(searchValue)
        setSearchValue("")
    }
    return (
        <div className='bg-dark'>
            <div className='container'>
                <div className='row'>
                    <nav className="navbar navbar-expand-lg bg-dark">
                        <div className="container-fluid">
                            <Link className="item-price" to="/">Resturant</Link>
                            <button className="navbar-toggler toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                <form className="d-flex my-2" role="search">
                                    <input
                                        className="form-control me-2"
                                        type="text"
                                        placeholder="Search"
                                        aria-label="Search"
                                        onChange={(e) => setSearchValue(e.target.value)}
                                        value={searchValue}
                                    />
                                    <button className="btn-search" type="submit" onClick={onSearch}>Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar