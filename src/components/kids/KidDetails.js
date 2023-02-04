import React from 'react'
//import classes from './KidDetails.module.css'

const KidDetails = ({ kidName, content, imgSource }) => {
    return (
    <div>
    <h1>{kidName}</h1>
    <img width='20%' src={imgSource} alt='' />
    <p>{content}</p>
    </div>
    )
}

export default KidDetails;