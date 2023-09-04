import React, { useState } from 'react'
import './Dashboard.css'
import '../../App.css'
import food from '../../assets/dataset.json'
import Wine from './Wine.png'
import Juice from './Juice.png'
import Beer from './Beer.png'

function Dashboard() {
    const [items, setItems] = useState('');
    const [toggle, setToggle] = useState('');

    const toggleBTN = (index) => {
        setItems(index)
        setToggle(index)
    }

    return (
        <>
            <section className='container'>
                <div className='filterWrapper'>
                    <div className={`filterWrap ${toggle === '' ? "selected" : null}`} onClick={() => toggleBTN('')}>
                        <p className="filters"> All </p>
                    </div>
                    {
                        food.labels.map((data) => (
                            <div className={`filterWrap ${toggle === data.label ? "selected" : null}`} key={data.id} onClick={() => toggleBTN(data.label)}>
                                <p className="filterName"> {data.label} </p>
                            </div>
                        ))
                    }
                </div>
            </section>

            <section className='container'>
                <div className="dashboardWrapper">
                    {
                        food.meals.map((data) => {
                            if (data.title.includes(items)) {
                                return ( 
                                    <div className="foodWrapper" key={data.id}>
                                        <div>
                                            <img className='foodImg' src={data.img} alt="Image of mentioned food" />
                                        </div>
                                        <div className="foodInfo">
                                            <p className="foodType"> {data.title} + drink </p>
                                            <h1 className="foodDesc"> {data.description} </h1>
                                            <p className="starter"> <strong>Starter:</strong> {data.starter} </p>
                                            <p className="desert"> <strong>Desert:</strong> {data.desert} </p>
                                            <p className="drinks"> <strong>Selected drink:</strong> </p>
                                            <div className="moreInfo">
                                                <div className="drinkImgWrapper">
                                                    <img className="drinkImg" src={Wine} alt="Glass of wine"/>
                                                    <img className="drinkImg" src={Juice} alt="Glass of juice"/>
                                                    <img className="drinkImg" src={Beer} alt="Mug of beer"/>
                                                </div>
                                                <div className="order">
                                                    <h1 className='price'> ${data.price} </h1>
                                                    <button className='submitBTN'> Select </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Dashboard