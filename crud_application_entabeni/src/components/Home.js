import React from 'react';
import Cards from './Cards';

const Home = () => {
    return(
        <div>
            <h1>Entabeni Systems</h1>
            <div className='scrollable'>
            <Cards/>
            </div>
        </div>
    )
}

export default Home;