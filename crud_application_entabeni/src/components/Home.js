import React from 'react';
import Cards from './Cards';
import {FaPlus} from 'react-icons/fa';
import { Link } from 'react-router-dom'


const Home = () => {
    return(
        <div>
            <Link to = {'/'} style = {{textDecoration : 'none'}}><h1>Entabeni Systems</h1></Link>
            <Link to = {'/add'}>
            <button className='addBtn'><FaPlus/> Add</button>
            </Link>
            <div className='scrollable'>
            <Cards/>
            </div>
        </div>
    )
}

export default Home;