import React, {useRef, useState} from 'react'
import classes from './MyForm.module.css'

const MyForm = () => {
  const [firstName, setFirstName] = useState()
  const [isChecked, setIsChecked] = useState(false)
  const handleFirstNameChange = (e) => {
      setFirstName(e.target.value)
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      console.log(firstName)
  }

  const handleChecked = () => {
      setIsChecked(prevState => !prevState)
  }

  return (
    <div className={classes.formMain}>
      <h2>My Form</h2>
        <form className={classes.subForm} onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="email" placeholder="Enter your name" onChange={handleFirstNameChange}/>
            </label>
            <label>
                Approved:
                <input type="checkbox" checked={isChecked} onChange={handleChecked}/>
            </label>
            <input type="submit" value="Submit"/>
            {isChecked &&
            <div>
                Please provide reason for approval!
            </div>}
            <p>{`Value of isChecked is ${isChecked}`}</p>
        </form>
    </div>
  )
}

export default MyForm