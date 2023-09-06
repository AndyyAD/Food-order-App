import React, { useState } from 'react'
import './Filterbox.css'
import '../../App.css'
import food from '../../assets/dataset.json'
import Dashboard from '../dashboard/Dashboard'

const Filterbox = () => {
    const [items, setItems] = useState(food.meals);
    const [toggle1, setToggle1] = useState('all');
    console.log(toggle1)

    const toggleBTN = (index, id) => {
        const updatedItems = food.meals.filter((item) => {
            return item.labels.includes(index);
        })
        setItems(updatedItems)
        setToggle1(id)
    }

    return (
        <>
            <section className="dashboard">
                <div className='filterWrapper'>
                    <div className={`filterWrap ${toggle1 === 'all' ? "selectedFood" : null}`}
                        onClick={() => {
                            setItems(food.meals)
                            setToggle1('all')
                        }}>
                        <p className="filters"> All </p>
                    </div>
                    {
                        food.labels.map((data) => (
                            <div className={`filterWrap ${toggle1 === data.id ? "selectedFood" : null}`} key={data.id} onClick={() => toggleBTN(data.label.toLowerCase(), data.id)}>
                                <p className="filterName"> {data.label} </p>
                            </div>
                        ))
                    }
                </div>
                <Dashboard items={items} />
            </section>
        </>
    )
}

export default Filterbox