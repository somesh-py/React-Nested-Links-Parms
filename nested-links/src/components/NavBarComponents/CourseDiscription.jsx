import React, { useState } from 'react'
import {useParams, useSearchParams } from 'react-router-dom'

const a =[{handle:'frameworks',name:'Django'},
        {handle:'frameworks',name:'Next-JS'},
        {handle:'frameworks',name:'Nebula'}]

const CourseDiscription = () => {

    let [Seleted,setSeleted]=useState();
    let [Query,setQuery]=useSearchParams();

    let parms=useParams()

    function queryHandle(handle,name){
        setSeleted(handle)
        setQuery({handle:name})
        console.log(Seleted)
        console.log(Query)
    }

    return (
        <>
            <h4>Course-Discription</h4>
            <h1>{parms.Crse}</h1>
            <h3>Frameworks</h3>
            {
                a.map(({handle,name})=>{
                 return <li key={name} onClick={()=>{queryHandle(handle,name)}} >{name}</li>    
                })
            }

            {/* <Link to={'/django'}>Django</Link>
            <Link to={'next-js'}>Next-JS</Link>
            <Link to={'/nebula'}>Nebula</Link> */}
            <div class="alert alert-warning" role="alert">
                Coding languages, also known as programming languages, are the foundation of software development, enabling humans to communicate their instructions to computers in a structured and understandable way. These languages serve as the intermediary between human logic and machine execution. They allow developers to create everything from simple scripts to complex applications, shaping the digital world we interact with daily.<br/>

                Each coding language has its unique syntax and semantics, designed to fulfill specific tasks and cater to various levels of abstraction. Some languages prioritize simplicity and ease of use, making them suitable for beginners, while others emphasize performance, scalability, or domain-specific tasks.<br/>

                Programming languages can be broadly categorized into several types:<br/>

                Low-Level Languages: These languages, like Assembly and Machine Code, provide direct control over hardware resources and are used in situations where efficiency is paramount, such as system programming and embedded systems development.<br/>

                High-Level Languages: These languages, such as Python, Java, and C++, abstract away many of the low-level details, making it easier for developers to write complex programs with less effort. They are often used for building applications, websites, and more.<br/>

                Scripting Languages: Scripting languages like JavaScript, Ruby, and PHP are used for writing scripts that control applications, websites, and automate various tasks. They're often interpreted rather than compiled.<br/>

                Functional Languages: Languages like Haskell and Lisp are built around the concept of functions as first-class citizens, allowing for elegant and concise code that emphasizes immutability and declarative programming.<br/>

                Object-Oriented Languages: Object-oriented languages like Java, C++, and Python focus on the concept of objects and classes, enabling modular and reusable code through encapsulation, inheritance, and polymorphism.<br/>

                Domain-Specific Languages (DSLs): These languages are tailored to specific tasks or industries. SQL for database querying, HTML/CSS for web development, and MATLAB for scientific computation are examples of DSLs.<br/>

                Concurrency-Oriented Languages: Languages like Go (Golang) and Erlang are designed for concurrent and parallel programming, making them suitable for building scalable and distributed systems.<br/>

                Compiled vs. Interpreted Languages: Some languages are compiled into machine code before execution (e.g., C, C++), while others are interpreted line by line during runtime (e.g., Python, JavaScript).<br/>

                Choosing the right programming language depends on factors such as project requirements, developer familiarity, performance needs, and the problem domain. The technology landscape is continually evolving, with new languages emerging to address modern challenges and opportunities in software development. As developers, understanding different coding languages empowers us to select the most suitable tool for bringing our ideas to life in the digital realm.






            </div>
        </>
    )
}

export default CourseDiscription