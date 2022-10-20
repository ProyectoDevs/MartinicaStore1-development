import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData'
import { useDispatch } from 'react-redux'
import { getProducts } from '../actions/productActions'

export const Home = () => {    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    return (
        <Fragment>
            <MetaData title="La mejor tienda virtual de ropa"></MetaData>
            <h2 id="encabezado_productos">  Ofertas </h2>
            <section id="productos" className='container mt-5'>
                <div className='row'>
                {/* Producto1*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/chaqueta_cuero.webp' alt='Chaqueta de cuero' />
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'> Hermosa chaqueta de cuero para caballero</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opniniones"> 4 reviews </span>
                            </div>
                            <p className='card-text'>$340.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                Ver detalle</a>
                        </div>   
                    </div>
                </div>

                {/* Producto2*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/conjunto_moda_ninos.jpg' alt='Conjunto de moda para nños' />
                        <div className='card-body d-flez flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'> Lindo conjunto para niños</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opniniones"> 13 reviews </span>
                            </div>
                            <p className='card-text'>$105.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                Ver detalle</a>
                        </div>   
                    </div>
                </div>

                {/* Producto3*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/vestido_ninas.jpg' alt='Vestido para niñas' />
                        <div className='card-body d-flez flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'> Hermoso vestido para niñas</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opniniones"> 5 reviews </span>
                            </div>
                            <p className='card-text'>$78.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                Ver detalle</a>
                        </div>   
                    </div>
                </div>

                {/* Producto4*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/overall.jpg' alt='Overall para damas' />
                        <div className='card-body d-flez flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'> Overall para damas</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opniniones"> 7 reviews </span>
                            </div>
                            <p className='card-text'>$98.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                Ver detalle</a>
                        </div>   
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Home