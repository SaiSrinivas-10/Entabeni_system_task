import React, {useState} from 'react';
import SkiDetails from './SkiDetails';
import {v4 as uuid} from 'uuid';
import {Link,useNavigate} from 'react-router-dom';

import image_1 from '../images/card_image_default.jpg';
import './form.css';

function Add(){
    const [name,setName] = useState('');
    const [location,setLocation] = useState('');
    const [skiruns,setSkiruns] = useState('');
    const [image,setImage] = useState([]);

    let history = useNavigate();

    const handleSubmit = (e) => {
        
        e.preventDefault();
        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        // eslint-disable-next-line
        if(image == ''){
            let img = image_1
            SkiDetails.push({id : uniqueId , image : img, name : name , location : location , ski_runs : skiruns });

        }
        else{
            SkiDetails.push({id : uniqueId , image : image, name : name , location : location , ski_runs : skiruns });
        }


        history("/");
    }

    const handleFileRead = async (event) => {
        const file = event.target.files[0]
        const base64 = await convertBase64(file)
        setImage(base64)
      }

      const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file)
          fileReader.onload = () => {
            resolve(fileReader.result);
          }
          fileReader.onerror = (error) => {
            reject(error);
          }
        })
      }



    return(
        <div>
            <Link to = {'/' } style={{textDecoration : 'none'}}><h1>Entabeni Systems</h1></Link>
            <form className = "form" onSubmit={(e)=>handleSubmit(e)}>
                <h5>Enter the details</h5>
                {/* <input type = "file" onChange={(e) => setImage(e.target.value)}></input> */}
                <input type = "text" placeholder='Enter Name *'  autoFocus onChange = {(e) => setName(e.target.value)} required/>
                <input type = "text" placeholder='Enter Location *'  onChange = {(e) => setLocation(e.target.value)} required/>
                <input type = "number" placeholder='Enter Number of Ski Runs *'  onChange = {(e) => setSkiruns(e.target.value)} required/>
                <input type = "file" accept="image/x-png,image/gif,image/jpeg" id = "file" onChange={(e) => handleFileRead(e)}></input>
                <button type = "submit">Submit</button>
            </form>
        </div>
    )
}

export default Add;

