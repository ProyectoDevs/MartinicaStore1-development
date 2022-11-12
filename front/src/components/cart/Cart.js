import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import MetaData from '../layout/MetaData'
import axios from 'axios'
import { useAlert } from 'react-alert'
const Cart = () => {

    const [items, setItems] = useState([]);
    const alert = useAlert();
    
    useEffect(() => {
        axios.get('/api/mycart')
            .then(response => setItems(response.data.itemsCart))
            .catch(error => console.log(error))
    }, []);

    const {id}=useParams()
    let {resultado} = 0
    const[suma,setSuma] = useState(0)
    
    
    const deleteitem = async (id) => {
        await axios.delete(`/api/item/${id}`)
        .then((response) => {
            alert.success("Producto Eliminado!");
            
        })

    }

    if(items.length === 0){
         return (
            <div className='container mt-4'>
                <div className='card'>
                    <div className='text-center text-danger'>
                        <h4>El carro está vacio</h4>
                    </div>
                </div>
            </div>
         )   
        }
    return (
        
        <div className='container-fluid'>     
            <div class="row mt-4 mb-2">
                <div class="col-md-9">
                    <div class="card">
                        
                        <div class="card-body">
                            
                            {items.map((item, index) => (
                                
                                <div key={item._id}>
                                    <Fragment>
                                        <div className="cart-item" key={item.producto.nombre}>
                                            <div class="row">
                                                    <div className='col border-bottom ml-2'>
                                                        <img class="rounded mx-auto d-block" src={item.producto[0].imagen[0].url} alt={item.producto.nombre} height="80" width="80" />
                                                    </div>
                                                    <div className='col border-bottom'>
                                                        <p className='text-xs-left text-muted'><h6>Producto</h6></p>
                                                        <p className='font-weight-bold text-info'>
                                                            <h5>{item.producto[0].nombre}</h5>
                                                            {item.id}
                                                        </p>
                                                    </div>
                                                    <div className='col border-bottom'>
                                                        <p className='text-xs-left text-muted'>V/Unitario</p>
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
                                                        <p className='text-xs-left text-muted mb-4'></p>
                                                        <button class="btn text-danger" onClick={() => deleteitem(item._id)} ><i class="fa-solid fa-trash-can"></i></button>
                                                    </div>
                                                </div>
                                        </div>
                                    </Fragment>
                                </div>
                            ))}
                        </div>
                        
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card flex-md-row mb-4 box-shadow">
                        <div class="card-body d-flex flex-column align-items-center">
                            <h3 class="mb-2">
                                <p class="">Total Venta</p>
                            </h3>
                            <div class="mb-2 text-muted">
                                <p class ="">
                                        $49990
                                </p>
                            </div>

                            <div class="">
                                <button class='btn btn-info'>Confirmar compra</button>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>       
    )
}

export default Cart
