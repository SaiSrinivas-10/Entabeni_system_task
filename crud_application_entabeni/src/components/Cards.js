import React from 'react';
import SkiDetails from './SkiDetails';
import { FaLocationArrow, FaSkiing, FaPen, FaTrash} from "react-icons/fa";
import './cards.css'



const Cards = () => {

    return(
        <section className='skilist'>
        {SkiDetails.map((SkiItem)=>{
        return(
            <article className='ski_element'>
                <img src ={SkiItem.image} alt = {SkiItem.name}/>            
                <h2>{SkiItem.name}</h2>
                <h2><FaLocationArrow style = {{padding : '0.2rem'}}/> {SkiItem.location}</h2>
                <p><FaSkiing/> {SkiItem.ski_runs}</p>
                <span className="udbuttons">
                    <button><FaPen/></button>
                    <button ><FaTrash/></button>
                </span>
            </article>
                );
            })}
        </section>
    )
}

export default Cards;

