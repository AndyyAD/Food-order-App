import React, { useState } from 'react'
import './Filters.css'
import '../../App.css'
import food from '../../assets/dataset.json'

const Filters = () => {
    const [items, setItems] = useState('')
    console.log(items)

    return (
        <section className='container'>
            <div className='filterWrapper'>
                <div className='filterWrap selected' onClick={() => setItems('')}>
                    <p className="filters"> All </p>
                </div>
                {
                    food.labels.map((data) => (                        
                        <div className='filterWrap' key={data.id} onClick={() => setItems(data.label)}>
                            <p className="filters"> {data.label} </p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Filters