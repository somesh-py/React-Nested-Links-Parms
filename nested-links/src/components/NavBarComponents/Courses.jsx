import React from 'react'
import { NavLink } from 'react-router-dom'


const Courses = () => {

    return (
        <>
            <div className="list-group">
                {/* <a href="react-js" className="list-group-item list-group-item-action list-group-item-primary">React-JS</a>
                <a href="python" className="list-group-item list-group-item-action list-group-item-secondary">Python</a>
                <a href="java" className="list-group-item list-group-item-action list-group-item-success">Java</a>
                <a href="machine-learning" className="list-group-item list-group-item-action list-group-item-danger">Machine Learning</a>
                <a href="java-script" className="list-group-item list-group-item-action list-group-item-warning">Java Script</a>
                <a href="numpy" className="list-group-item list-group-item-action list-group-item-info">Numpy</a>
                <a href="pandas" className="list-group-item list-group-item-action list-group-item-light">Pandas</a>
                <a href="power-bi" className="list-group-item list-group-item-action list-group-item-dark">Power-BI</a> */}

                <NavLink className="list-group-item list-group-item-action list-group-item-primary" to={'react-js'}>React-JS</NavLink>
                <NavLink className="list-group-item list-group-item-action list-group-item-secondary" to={'python'}>Python</NavLink>
                <NavLink className="list-group-item list-group-item-action list-group-item-success" to={'java'}>Java</NavLink>
                <NavLink className="list-group-item list-group-item-action list-group-item-danger" to={'machine-learning'}>Machine-Learning</NavLink>
                <NavLink className="list-group-item list-group-item-action list-group-item-warning" to={'java-script'}>Java Script</NavLink>
                <NavLink className="list-group-item list-group-item-action list-group-item-info" to={'numpy'}>Numpy</NavLink>
                <NavLink className="list-group-item list-group-item-action list-group-item-light" to={'pandas'}>Pandas</NavLink>
                <NavLink className="list-group-item list-group-item-action list-group-item-dark" to={'power-bi'}>Power-BI</NavLink>
            </div>
        </>
    )
}

export default Courses
