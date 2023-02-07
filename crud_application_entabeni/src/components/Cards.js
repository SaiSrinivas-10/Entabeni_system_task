import React from 'react';
import SkiDetails from './SkiDetails';
import { FaLocationArrow, FaSkiing, FaPen, FaTrash} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import './cards.css'



const Cards = () => {

    let history = useNavigate();

    const handleDelete = (id) =>{
        var index = SkiDetails.map(function(e){
            return e.id
        }).indexOf(id);

        SkiDetails.splice(index,1);
        history('/');
    }

    return(
        <section className='skilist'>
        {SkiDetails.map((SkiItem)=>{
        return(
            <article className='ski_element'>
                <img src ={SkiItem.image} alt = {SkiItem.name}/>            
                <h2>{SkiItem.name}</h2>
                <p><FaLocationArrow style = {{padding : '0.2rem'}}/> {SkiItem.location}</p>
                <p><FaSkiing/> {SkiItem.ski_runs}</p>
                <span className="udbuttons">
                    <button><FaPen/></button>
                    <button onClick={() => handleDelete(SkiItem.id)}><FaTrash/></button>
                </span>
            </article>
                );
            })}
        </section>
    )

}

export default Cards;

