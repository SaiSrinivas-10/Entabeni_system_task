import React, {useState,useEffect} from 'react';
import SkiDetails from './SkiDetails';
import {Link,useNavigate} from 'react-router-dom';
import './form.css';

function Edit(){

    const [id,setId] = useState('');
    const [name,setName] = useState('');
    const [location,setLocation] = useState('');
    const [skiruns,setSkiruns] = useState('');
    const [image,setImage] = useState([])

    let history = useNavigate();

    
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
    
    var index = SkiDetails.map(function(e){
            return e.id
        }).indexOf(id);

        const handleSubmit = (e) => {
            e.preventDefault();
            let a = SkiDetails[index];
            a.name = name;
            a.location = location;
            a.ski_runs = skiruns;
            a.image = image;
            history("/");
    
        }

        useEffect(()=> {
            setId(localStorage.getItem('Id'))
            setName(localStorage.getItem('Name'));
            setLocation(localStorage.getItem('Location'));
            setSkiruns(localStorage.getItem('SkiRuns'));
            setImage(localStorage.getItem('Image'))

        },[])

    return(
        <div>
        <Link to = {'/' } style = {{textDecoration : 'none'}}><h1>Entabeni Systems</h1></Link>
            <form className = "form" onSubmit={(e)=>handleSubmit(e)}>
                <h3>Update</h3>
                        <h5>Update the details</h5>
                        {/* <input type = "file" onChange={(e) => setImage(e.target.value)}></input> */}
                        <input type = "text" placeholder='Enter Name *'  autoFocus onChange = {(e) => setName(e.target.value)} required value = {name}/>
                        <input type = "text" placeholder='Enter Location *'  onChange = {(e) => setLocation(e.target.value)} required value = {location}/>
                        <input type = "number" placeholder='Enter Number of Ski Runs *'  onChange = {(e) => setSkiruns(parseInt(e.target.value))} required value = {skiruns}/>
                        <input type = "file" accept="image/x-png,image/gif,image/jpeg" id = "file" onChange={(e) => handleFileRead(e)}></input>
                        <button type = "submit">Update</button>
            </form>
        </div>
    )


}


export default Edit;