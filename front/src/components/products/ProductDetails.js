import React, { Fragment } from 'react';
import MetaData from "../layout/MetaData"

export const ProductDetails = () => {
    return (
        <Fragment>
            <MetaData title="Sudadera para niñas"></MetaData>
            <div className='row d-flex justify-content-around'>
                <div className='col12 col-lg-5 img-fluid' id= "imagen_producto">
                    <img src="../images/sudadera_ninas.jpg" alt="Imagen_producto" height="450" width="450"></img>
                </div>

                <div className='col-12 col-lg-5 mt-5'>
                    <h3> Sudadera multicolor para niñas</h3>
                    <p id="product-id">Product #324513</p>
                </div>
            </div>
        </Fragment>
    )
}
    