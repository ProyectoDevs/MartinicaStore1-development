import React, { Fragment } from 'react'

const Home = () => {
  return (
    <Fragment>
        <h2 id="encabezado_productos">  Ofertas </h2>

        <section id="productos" className='container mt-5'>
            <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/chaqueta_cuero.webp' alt='Chaqueta de cuero' />
                        <div className='card-body d-flez flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'> Hermosa chaqueta de cuero para caballero</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opniniones"> 4 reviews </span>
                            </div>
                            <p className='card-text'>$340.000</p><a href='http://localhost:3000' id="ver_producto" className='btn btn-block'>
                                Ver detalle
                                </a>
                        </div>   
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Home