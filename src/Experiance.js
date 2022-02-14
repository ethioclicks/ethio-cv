import react, { useState, useEffect } from "react";

const Experiance = (props)=>{
    const [company, setCompany] = useState('')
    const [yearsFrom, setYearsFrom] = useState(0)
    const [yearsTo, setYearsTo] = useState(0)
    const [position, setPosition] = useState('')
    // const [experiances, setExperiances] = useState([])

    const experianceAddHandler = (e) => {
        e.preventDefault()
        console.log("before",props.experiances);
        const newExperiance = {company, yearsFrom, yearsTo, position}
        const newExperiances = [...props.experiances,newExperiance]
        props.setExperiances(newExperiances )
    }

    const companyChangeHandler = (e) =>{
        e.preventDefault()
        setCompany(e.target.value)
    }

    const yearsFromChangeHandler = (e) =>{
        e.preventDefault()
        setYearsFrom(e.target.value)
    }

    const yearsToChangeHandler = (e) =>{
        e.preventDefault()
        setYearsTo(e.target.value)
    }

    const positionChangeHandler = (e) =>{
        e.preventDefault()
        setPosition(e.target.value)
    }

    const eductionComponents= props.experiances.map(experiance => {
        return (<tr>
                    <th scope="row">1</th>
                    <td>{experiance.company}</td>
                    <td>{experiance.yearsFrom}</td>
                    <td>{experiance.yearsTo}</td>
                    <td>{experiance.position}</td>
                </tr>)
            });
        
    return (
        <>
        <p>Experiance:</p>
        <hr/>
       <div className="experiance-input-container" >
            <div className="experiance-form-group ">
                <input type="text" className="form-control" onChange={companyChangeHandler} id="company" placeholder="Company" />
            </div>
            <div class="experiance-form-group ">
                <input type="text" className="form-control" onChange={yearsFromChangeHandler} id="yearsFrom" placeholder="From Year"/>
            </div>
            <div class="experiance-form-group ">
                <input type="text" className="form-control" onChange={yearsToChangeHandler} id="yearsTo" placeholder="To year"/>
            </div>
            <div class="experiance-form-group ">
                <input type="text" className="form-control" onChange={positionChangeHandler} id="position" placeholder="Position"/>
            </div>
            <button type="button" onClick={experianceAddHandler} className="btn btn-primary mb-2">Add</button>
        </div> 
        
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Company</th>
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

export default Experiance;