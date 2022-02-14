import react, { useState } from "react";
import Education from "./Education";
import Experiance from "./Experiance";

const CV = ()=>{
    const [firstName, setfirstNam] = useState('')
    const [lastname, setlastname] = useState('')
    const [email, setemail] = useState('') 
    const [experiances, setExperiances] = useState([])
    const [educations, setEducations] = useState([])

    const firstnameChangeHandler = (e) =>{
        e.preventDefault()
        setfirstNam(e.target.value)
    }
    const lastnameChangeHandler = (e) =>{
        e.preventDefault()
        setlastname(e.target.value)
    }
    const emailChangeHandler = (e) =>{
        e.preventDefault()
        setemail(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log({firstName, lastname, email,educations, experiances});
    }


    return (
    <div className="cv-container">
        <form>
            <div class="form-group">
                <input type="text" onChange={firstnameChangeHandler} class="form-control" id="firstName" placeholder="Enter first name"/>
            </div>
            <div class="form-group">
                <input type="text" onChange={lastnameChangeHandler} class="form-control" id="lastName" placeholder="Enter last name"/>
            </div>
            <div class="form-group">
                <input type="email" onChange={emailChangeHandler} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                
            </div><br/>
            <Education setEducations={setEducations} educations={educations}></Education>
            <Experiance setExperiances={setExperiances} experiances={experiances}></Experiance>
            <button type="submit" class="btn btn-primary" onClick={submitHandler}>Submit</button>
        </form>
        
    </div>
    
    );
}

export default CV;