import React from 'react'
import './Filters.css'
import '../../App.css'
import food from '../../assets/dataset.json'

const Filters = () => {
    return (
        <section className='container'>
            <div className='filterWrapper'>
                <div className='filterWrap selected'>
                    <p className="filter"> All </p>
                </div>
                {
                    food.labels.map((data) => (
                        <div className='filterWrap' key={data.id}>
                            <p className="filter"> {data.label} </p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Filters