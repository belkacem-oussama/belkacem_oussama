import { useState } from 'react'

import styles from './styles.css'

export default function Contact() {

    const [formName, setName] = useState('')
    const [formSurname, setSurname] = useState('')
    const [formPhone, setPhone] = useState('')
    const [formMail, setMail] = useState('')
    const [formLocation, setLocation] = useState('')
    const [formHelp, setHelp] = useState('')
    const [formInfos, setInfos] = useState('')

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleSurnameChange = (e) => {
        setSurname(e.target.value)
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }
    const handleMailChange = (e) => {
        setMail(e.target.value)
    }
    const handleLocationChange = (e) => {
        setLocation(e.target.value)
    }
    const handleHelpChange = (e) => {
        setHelp(e.target.value)
    }
    const handleInfosChange = (e) => {
        setInfos(e.target.value)
    }

  return (
    <div className='form_container'>
        <form>
            <label>Name :</label>
            <input type='text' name='name' onChange={handleNameChange} value={formName} ></input>
            <label>Surname :</label>
            <input type='text' name='subject' onChange={handleSurnameChange} value={formSurname} ></input>
            <label>Phone :</label>
            <input type='text' name='subject' onChange={handlePhoneChange} value={formPhone} ></input>
            <label>Mail :</label>
            <input type='text' name='subject' onChange={handleMailChange} value={formMail} ></input>
            <label>Location :</label>
            <input type='text' name='subject' onChange={handleLocationChange} value={formLocation} ></input>
            <label>What can I do for you ?</label>
            <input type='text' name='subject' onChange={handleHelpChange} value={formHelp} ></input>
            <label>How did you find this place ?</label>
            <input type='text' name='subject' onChange={handleInfosChange} value={formInfos} ></input>
            <button>Let's go !</button>
        </form>
    </div>
  )
}
