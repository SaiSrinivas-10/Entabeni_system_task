import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import SkiDetails from './SkiDetails';
import {Link,useNavigate, useSearchParams} from 'react-router-dom';

import image_1 from '../images/card_image_default.jpg';
import './form.css';

function Edit(){
    const [name,setName] = useState('');
    const [location,setLocation] = useState('');
    const [skiruns,setSkiruns] = useState('');
    const [image,setImage] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [data,setData] = useState({});
    const [id,setId] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
        
        e.preventDefault();
        let img = image_1;

        SkiDetails.push({image : image, name : name , location : location , ski_runs : skiruns });
        history("/");
    }

    const handleFileRead = async (event) => {
        const file = event.target.files[0]
        const base64 = await convertBase64(file)
        setImage(base64)
        console.log(base64)
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


      useEffect(() => {
        console.log(searchParams.get('id'))
        var id = searchParams.get('id')
        setId(id)
        {SkiDetails.map((SkiItem)=>{
            if(SkiItem.id == id){
                console.log(SkiItem)
                setData(SkiItem)
            }
        })}

      },[]);

    return(
        <div>
            <Link to = {'/' } style={{textDecoration : 'none'}}><h1>Entabeni Systems</h1></Link>
            <form className = "form" onSubmit={(e)=>handleSubmit(e)}>
                <h5>Enter the details</h5>
                {/* <input type = "file" onChange={(e) => setImage(e.target.value)}></input> */}
                <input type = "text" placeholder= {data.name} autoFocus onChange = {(e) => setName(e.target.value)} required/>
                <input type = "text" placeholder= {data.location}  onChange = {(e) => setLocation(e.target.value)} required />
                <input type = "number" placeholder={data.ski_runs}  onChange = {(e) => setSkiruns(e.target.value)} required/>
                <input type = "file" accept="image/x-png,image/gif,image/jpeg" id = "file" onChange={(e) => handleFileRead(e)}></input>
                <button type = "submit">Submit</button>
            </form>
        </div>
    )
}

export default Edit;

