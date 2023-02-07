import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import SkiDetails from './SkiDetails';
import {v4 as uuid} from 'uuid';
import {useNavigate} from 'react-router-dom';

import image_1 from '../images/card_image_default.jpg';
import './form.css';

function Add(){
    const [name,setName] = useState('');
    const [location,setLocation] = useState('');
    const [skiruns,setSkiruns] = useState('');
    // const [image,setImage] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const ids = uuid();
        let uniqueId = ids.slice(0,8);
        let img = image_1;
        let a = name,
        b = location,
        c = skiruns;

        SkiDetails.push({id : uniqueId , image : img, name : a , location : b , ski_runs : c });
        history("/");

    }

    return(
        <div>
            <form className = "form" onSubmit={(e)=>handleSubmit(e)}>
                <h5>Enter the details</h5>
                {/* <input type = "file" onChange={(e) => setImage(e.target.value)}></input> */}
                <input type = "text" placeholder='Enter Name *' required onChange = {(e) => setName(e.target.value)}/>
                <input type = "text" placeholder='Enter Location *' required onChange = {(e) => setLocation(e.target.value)}/>
                <input type = "number" placeholder='Enter Number of Ski Runs *' required onChange = {(e) => setSkiruns(e.target.value)}/>
                <button type = "submit">Submit</button>
            </form>
        </div>
    )
}

export default Add;