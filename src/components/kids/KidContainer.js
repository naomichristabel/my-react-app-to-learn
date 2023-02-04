import React from 'react'
import KidDetails from './KidDetails'
import classes from './KidContainer.module.css'

const KidContainer = () => {
  return (
    <>
    <KidDetails kidName="Neah" content="I am a good girl." imgSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6IFfbalrRS8QAlNqI8NxmniMlcHsFRmhMIozmsGo0xQ&s'/>
    <KidDetails kidName="Jordan" content="I am a good boy." imgSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxZfiFooiCet0hOlPf_5eJDlU31DUepzpIfI2vBfk&s'/> 
    </>
  )
}

export default KidContainer
