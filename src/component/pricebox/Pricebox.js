import React, { useState } from 'react'
import Flight from './flight.svg'
import './Pricebox.css'

const Pricebox = (props) => {
    const [status1, setStatus1] = useState('Not selected');
    const [status2, setStatus2] = useState('Not selected');
    const [price1, setPrice1] = useState(0);
    const [price2, setPrice2] = useState(0);
    const [drink1, setDrink1] = useState('None');
    const [drink2, setDrink2] = useState('None');

    const [selected, setSelected] = useState(false)
    const [pass, setPass] = useState(0)

    const handleSelect = () => {
        if (pass === 1 && props.ordered !== null) {
            setStatus1(props.ordered)
            setPrice1(props.totalPrice)
            setDrink1(props.name)
            setPass(0)
        } else if (pass === 2 && props.ordered !== null){
            setStatus2(props.ordered)
            setPrice2(props.totalPrice)
            setDrink2(props.name)
            setPass(0)
        }
    }

    return (
        <>
            <section className='mainPriceWrapper'>
                <div className="summary">
                    <div className="infoWrapper">
                        <div className="infoHead">
                            <img src={Flight} alt="svg of a plane" className='flight' />
                            <h1 className='selectMeal'> Select meal </h1>
                        </div>
                        <p className='infoText'> Click on select and then click on passenger to assign a meal </p>
                        <div className="orderDis">
                            <h1 className="route"> London - Dubai </h1>
                            <p className="duration"> Flight duration: 7 hours </p>
                        </div>
                    </div>
                    <div className="foodSelected">
                        <div className={`pass1 ${(selected && pass === 1) ? 'backgroundChange' : ''}`} onClick={() => {
                            setSelected(!selected)
                            setPass(1)
                            handleSelect()
                        }}>
                            <p className="pass"> Adult Passenger 1: </p>
                            <p className="status"> {status1} + {drink1} </p>
                        </div>
                        <div className={`pass2 ${(selected && pass === 2) ? 'backgroundChange' : ''}`} onClick={() => {
                            setSelected(!selected)
                            setPass(2)
                            handleSelect()
                        }}>
                            <p className="pass"> Adult Passenger 2: </p>
                            <p className="status"> {status2} + {drink2} </p>
                        </div>
                        <div className="deselectBTN">
                            <button onClick={() => {
                                setStatus1('Not selected')
                                setStatus2('Not selected')
                                setPass(0)
                                setPrice1(0)
                                setPrice2(0)
                                setDrink1('None')
                                setDrink2('None')
                            }}> Deselect </button>
                        </div>
                    </div>
                    <div className="priceWrapper">
                        <p>Total for all passegers: <span> ${(Number(price1) + Number(price2)).toFixed(2)}</span> </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricebox