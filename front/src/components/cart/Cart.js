import React, { Fragment, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import MetaData from '../layout/MetaData'
import axios from 'axios'

const Cart = () => {

const [items, setItems] = useState([]);

const [cantidad, setCantidad] = useState(null);

useEffect(() =>{
    axios.get('/api/mycart')
    .then(response => setItems(response.data.itemsCart))
    .catch(error => console.log(error))
},[]);


    return (
    <div className=''>
        {items.map((item) =>(
            <div key={item._id}>
                <Fragment>
                    <div className="cart-item" key={item.producto.nombre}>
                        
                        <div class="container text-center">
                            <div class="row">
                                <div className='col'><img src={item.producto[0].imagen[0].url} alt={item.producto.nombre} height="90" width="115" /></div>
                                <div className='col'>{item.producto[0].nombre}</div>
                                <div className='col'>{item.producto[0].precio}</div>
                                <div className='col'>
                                    <span className="btn btn-danger minus">-</span>
                                    {item.cantidad}
                                    <span className="btn btn-primary plus" onClick={() => setCantidad(item.cantidad + 1)}>+</span>
                                </div>
                                <div className='col'>
                                    <p>${(item.cantidad * item.producto[0].precio)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            </div>
        ))}
        
    </div>
    )
}

export default Cart
