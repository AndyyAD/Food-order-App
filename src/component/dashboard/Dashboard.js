import React, { useState } from 'react'
import './Dashboard.css'
import '../../App.css'
import Wine from './Wine.png'
import Juice from './Juice.png'
import Beer from './Beer.png'

function Dashboard({ items }) {
    const drinkImgData = [
        {
            "img": Wine,
            "alt": "Glass of wine"
        },
        {
            "img": Juice,
            "alt": "Glass of juice"
        },
        {
            "img": Beer,
            "alt": "Glass of beer"
        }
    ]

    return (
        <div className="dashboardWrapper">
            {
                items.map((data) => {
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
                                <p className="drinks"> <strong>Selected drink:</strong>  </p>
                                <div className="moreInfo">
                                    <div className="drinkImgWrapper">
                                        {
                                            drinkImgData.map((drink) => (
                                                <img
                                                    className={`drinkImg`}
                                                    src={drink.img} alt={drink.alt}
                                                />
                                            ))
                                        }
                                    </div>
                                    <div className="order">
                                        <h1 className='price'> ${data.price} </h1>
                                        <button className='submitBTN'> Select </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Dashboard