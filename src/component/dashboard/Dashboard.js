import React, { useState } from 'react'
import './Dashboard.css'
import '../../App.css'
import food from '../../assets/dataset.json'
import Wine from './Wine.png'
import Juice from './Juice.png'
import Beer from './Beer.png'

function Dashboard(props) {
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [mainId, setMainId] = useState('')
    const [drinkId, setDrinkId] = useState('')
    const [toggle1, setToggle1] = useState(false)

    const drinkImgData = [
        {
            "img": Wine,
            "alt": "Glass of vine"
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

    const drinksData = food.meals[0].drinks;
    const drinksWithImg = drinkImgData.map((drinkImgData, index) => ({ ...drinkImgData, ...drinksData[index] }))

    const selectDrink = (mainId, drinkId, title, price) => {
        if (toggle1) {
            setName('')
            setPrice(0)
            setMainId('')
            setDrinkId('')
        } else {
            setName(title)
            setPrice(price)
            setMainId(mainId)
            setDrinkId(drinkId)
        }
        setToggle1(toggle1 => !toggle1)
    }

    const handleClick = (order, dname, tprice) => {
        props.getData(order, dname, tprice);
    }

    return (
        <div className="dashboardWrapper">
            {
                props.items.map((data) => {
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
                                <p className="drinks"> <strong>Selected drink:</strong> {data.id === mainId ? name : ''}</p>
                                <div className="moreInfo">
                                    <div className="drinkImgWrapper ">
                                        {
                                            drinksWithImg.map((drink) => (
                                                <div key={drink.id}>
                                                    <img
                                                        className={`drinkImg ${(mainId === data.id && drinkId === drink.id) ? 'selectedDrink' : ''}`}
                                                        src={drink.img} alt={drink.alt}
                                                        onClick={() => selectDrink(data.id, drink.id, drink.title, drink.price)}
                                                    />
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className="order">
                                        <h1 className='price'> ${(data.price + (data.id === mainId ? price : 0)).toFixed(2)} </h1>
                                        <button className='submitBTN' onClick={() => handleClick(data.title, name, (data.price + price).toFixed(2))}> Select </button>
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