import React, { useState } from 'react'
import Flight from './flight.svg'
import './Pricebox.css'

const Pricebox = () => {
    const [status1, setStatus1] = useState('Not selected');
    const [status2, setStatus2] = useState('Not selected');
    const [totalPrice, setTotalPrice] = useState(0);

    return (
        <>
            <section className='mainPriceWrapper'>
                <div className="summary">
                    <div className="infoWrapper">
                        <div className="infoHead">
                            <img src={Flight} alt="svg of a plane" className='flight' />
                            <h1 className='selectMeal'> Select meal </h1>
                        </div>
                        <div className="orderDis">
                            <h1 className="route"> London - Dubai </h1>
                            <p className="duration"> Flight duration: 7 hours </p>
                        </div>
                    </div>
                    <div className="foodSelected">
                        <div className="pass1">
                            <p className="pass"> Adult Passenger 1: </p>
                            <p className="status"> {status1} </p>
                        </div>
                        <div className="pass2">
                            <p className="pass"> Adult Passenger 2: </p>
                            <p className="status"> {status2} </p>
                        </div>
                    </div>
                    <div className="priceWrapper">
                        <p>Total for all passegers: <span>${totalPrice}</span> </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricebox