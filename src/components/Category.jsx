import React from 'react'

function Category({ filterByCategoriy, allCategory }) {

    return (
        <div className='row my-3'>
            <div className='col-12 d-flex justify-content-center'>
                {
                    allCategory.map((btn) => {
                        return (
                            <button className='btn button  mx-2' key={Math.random()} onClick={() => filterByCategoriy(btn)}>{btn}</button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Category