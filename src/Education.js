import react, { useState, useEffect } from "react";

const Education = (props)=>{
    const [inititute, setInititute] = useState('')
    const [yearsFrom, setYearsFrom] = useState(0)
    const [yearsTo, setYearsTo] = useState(0)
    const [degree, setDegree] = useState('')
    // 

    const educationAddHandler = (e) => {
        e.preventDefault()
        console.log("before",props.educations);
        const newEducation = {inititute, yearsFrom, yearsTo, degree}
        const newEducations = [...props.educations,newEducation]
        props.setEducations(newEducations )
    }

    const inistituteChangeHandler = (e) =>{
        e.preventDefault()
        setInititute(e.target.value)
    }

    const yearsFromChangeHandler = (e) =>{
        e.preventDefault()
        setYearsFrom(e.target.value)
    }

    const yearsToChangeHandler = (e) =>{
        e.preventDefault()
        setYearsTo(e.target.value)
    }

    const degreeChangeHandler = (e) =>{
        e.preventDefault()
        setDegree(e.target.value)
    }

    const eductionComponents= props.educations.map(education => {
        return (<tr>
                    <th scope="row">1</th>
                    <td>{education.inititute}</td>
                    <td>{education.yearsFrom}</td>
                    <td>{education.yearsTo}</td>
                    <td>{education.degree}</td>
                </tr>)
            });
        
    return (
        <>
        <p>Education:</p>
        <hr/>
       <div className="education-input-container" >
            <div className="education-form-group ">
                <input type="text" className="form-control" onChange={inistituteChangeHandler} id="inistitute" placeholder="Inistitute" />
            </div>
            <div class="education-form-group ">
                <input type="text" className="form-control" onChange={yearsFromChangeHandler} id="yearsFrom" placeholder="From Year"/>
            </div>
            <div class="education-form-group ">
                <input type="text" className="form-control" onChange={yearsToChangeHandler} id="yearsTo" placeholder="To year"/>
            </div>
            <div class="education-form-group ">
                <input type="text" className="form-control" onChange={degreeChangeHandler} id="degree" placeholder="Degree aquired:"/>
            </div>
            <button type="button" onClick={educationAddHandler} className="btn btn-primary mb-2">Add</button>
        </div> 
        
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Inistitute</th>
                <th scope="col">From</th>
                <th scope="col">To</th>
                <th scope="col">Degree aquired</th>
                </tr>
            </thead>
            <tbody>
                {eductionComponents}
            </tbody>
        </table>
        </>
    
    
    );
}

export default Education;