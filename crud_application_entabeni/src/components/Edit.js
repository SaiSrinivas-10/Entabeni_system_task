import React, {useState,useEffect} from 'react';
import SkiDetails from './SkiDetails';
import {Link,useNavigate} from 'react-router-dom';

function Edit(){

    const [id,setId] = useState('');
    const [name,setName] = useState('');
    const [location,setLocation] = useState('');
    const [skiruns,setSkiruns] = useState('');

    let history = useNavigate();
    
    var index = SkiDetails.map(function(e){
            return e.id
        }).indexOf(id);

        const handleSubmit = (e) => {
            e.preventDefault();
            let a = SkiDetails[index];
            a.name = name;
            a.location = location;
            a.ski_runs = skiruns;
            history("/");
    
        }

        useEffect(()=> {
            setId(localStorage.getItem('Id'))
            setName(localStorage.getItem('Name'));
            setLocation(localStorage.getItem('Location'));
            setSkiruns(localStorage.getItem('SkiRuns'));

        },[])

    return(
        <div>
        <Link to = {'/' } style = {{textDecoration : 'none'}}><h1>Entabeni Systems</h1></Link>
            <form className = "form" onSubmit={(e)=>handleSubmit(e)}>
                        <h5>Update the details</h5>
                        {/* <input type = "file" onChange={(e) => setImage(e.target.value)}></input> */}
                        <input type = "text" placeholder='Enter Name *'  autoFocus onChange = {(e) => setName(e.target.value)} required value = {name}/>
                        <input type = "text" placeholder='Enter Location *'  onChange = {(e) => setLocation(e.target.value)} required value = {location}/>
                        <input type = "number" placeholder='Enter Number of Ski Runs *'  onChange = {(e) => setSkiruns(e.target.value)} required value = {skiruns}/>
                        <button type = "submit">Update</button>
            </form>
        </div>
    )


}


export default Edit;