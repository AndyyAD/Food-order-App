import React, { useState } from 'react'
import './Filterbox.css'
import '../../App.css'
import food from '../../assets/dataset.json'
import Dashboard from '../dashboard/Dashboard'
import Pricebox from '../pricebox/Pricebox'

const Filterbox = () => {
    const [items, setItems] = useState(food.meals);
    const [toggle1, setToggle1] = useState('all');

    const [currPage, setCurrPage] = useState(1);
    const itemPerPage = 3;
    const last = itemPerPage * currPage;
    const first = last - itemPerPage;
    const itemInPage = items.slice(first, last);
    const npage = Math.ceil(items.length / itemPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

    const [ordered, setOrdered] = useState('');
    const [name, setName] = useState('')
    const [totalPrice, setTotalPrice] = useState('')

    const toggleBTN = (index, id) => {
        const updatedItems = food.meals.filter((item) => {
            return item.labels.includes(index);
        })
        setItems(updatedItems)
        setToggle1(id)
    }

    const changePage = (number) => {
        setCurrPage(number);
    }

    const getData = (order, dname, tprice) => {
        setOrdered(order);
        setName(dname);
        setTotalPrice(tprice)
    }

    return (
        <section className='main'>
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
                <Dashboard items={itemInPage} getData={getData}/>
                <div className="pagination">
                    {
                        numbers.map((number, index) => (
                            <div className={`pageNo ${currPage === number ? "active" : null}`} key={index} onClick={() => changePage(number)}>
                                <p> {number} </p>
                            </div>
                        ))
                    }
                </div>
            </section>
            <Pricebox ordered={ordered} name={name} totalPrice={totalPrice}/>
        </section>
    )
}

export default Filterbox