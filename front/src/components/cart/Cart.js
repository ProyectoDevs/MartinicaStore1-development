import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MetaData from '../layout/MetaData'
import axios from 'axios'

const Cart = () => {

    const [items, setItems] = useState([]);
    const [cantidad, setCantidad] = useState(0);

    useEffect(() => {
        axios.get('/api/mycart')
            .then(response => setItems(response.data.itemsCart))
            .catch(error => console.log(error))
    }, []);


    return (
        <div className='card mt-3'>
            <div className='card-header text-center'>
                <h3>Listado de Productos</h3>
            </div>
            {items.map((item) => (
                <div key={item._id}>
                    <Fragment>
                        <div className="cart-item" key={item.producto.nombre}>
                            <div class="container">
                                <div class="row">
                                    <div className='col border-bottom'><img src={item.producto[0].imagen[0].url} alt={item.producto.nombre} height="60" width="70" /></div>
                                    <div className='col border-bottom'>
                                        <p className='text-xs-left text-muted'><h6>Producto</h6></p>
                                        <p className='font-weight-bold '>
                                            <h5>{item.producto[0].nombre}</h5>
                                        </p>
                                    </div>
                                    <div className='col border-bottom'>
                                        <p className='text-xs-left text-muted'><h6>Precio Unitario</h6></p>
                                        <span className='mt-2'>${item.producto[0].precio}</span>
                                    </div>
                                    <div className='col border-bottom'>
                                        <p className='text-xs-left text-muted'><h6>Cantidad</h6></p>
                                        <span className='p-2'>{item.cantidad}</span>
                                    </div>
                                    <div className='col'>
                                        <p className='text-xs-left text-muted'><h6>Valor Total</h6></p>
                                        <p className='text-lg-left '>${(item.cantidad * item.producto[0].precio)}</p>
                                    </div>

                                    <div className='col'>
                                        <p className='text-xs-left text-muted'><h6>Disponibles</h6></p>
                                        <p className='text-lg-left '>{item.producto[0].inventario}</p>

                                         {/* operacion para restar inventario */ }
                                        <p className='text-xs-left text-muted'><h6>Saldo Inventario</h6></p>
                                        <p className='text-lg-left'>{(item.producto[0].inventario - item.cantidad)}</p>
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
