<<<<<<< HEAD
import React, { Fragment, useEffect, useState } from 'react'
import "../App.css"
import { Link } from "react-router-dom"
import axios from 'axios';
import { response } from 'express';

const Header = () => {

    const [cantidad,setCantidad] = useState(0);

    useEffect(() =>{
        axios.get('/api/countitems')
        .then(response => setCantidad(response.data))
        .catch(error => console.log(error))
    })

=======
import React, { Fragment } from 'react'
import "../App.css"
import { Link } from "react-router-dom"
import {Search} from './layout/Search'

const Header = () => {

>>>>>>> jules
    return (
        <Fragment>
            <nav className='navbar row'>
                <div className='col-12 col-md-3'>
                    <div className='navbar-brand'>
<<<<<<< HEAD
                        <Link to="/" ><img src="./images/logo.png" className="d-inline-block mx-3" alt="Martinica Store"></img></Link>
                    </div>  
                </div>

                <div className='col-12 col-md-6 mt-2 mt-md-0'>
                    <div className="input-group">
                        <input
                            type="text"
                            id="search_field"
                            class="form-control"
                            placeholder='Que producto busca?'></input>
                        <div class="input-group-append">
                            <button id="search-btn" class="btn">
                                <i class="fa fa-search-plus fa-2x text-white" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
=======
                        <Link to="/" ><img src="../images/NewlogoMS.jpeg" width="40%" alt="Martinica Store"></img></Link>
                    </div>
                </div>

                <div className='col-12 col-md-4 mt-2 mt-md-0'>
                {/*Aquí busca*/}
                <Search />
                </div>
                {/*Boton inicio sesión*/}
                <Link to="/login" className="btn ml-4' id="login_btn>Login</Link>
>>>>>>> jules
                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    <div className="ml-4 dropdown d-inline">
                        <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button"
                            id="dropDownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span>Panel de Control</span></Link>
                        <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
                            <Link className="dropdown-item" to="/dashboard">Adm. Productos</Link>
                            <Link className="dropdown-item" to="/">Pedidos</Link>
                            <Link className="dropdown-item" to="/">Mi cuenta</Link>
                            <Link className="dropdown-item" to="/">Cerrar Sesion</Link>
                        </div>
                    </div>

                    <Link to="/carrito"><i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="false"></i>
                        <span className="ml-1" id="cart_count">2</span></Link>
                </div>

            </nav>

        </Fragment>
    )

}

export default Header