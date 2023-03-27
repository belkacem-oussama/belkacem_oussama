import { useState } from 'react'
import Thanks from '../Thanks/Thanks'

import styles from './styles.css'

export default function Contact() {

    const [formName, setName] = useState('')
    const [formSurname, setSurname] = useState('')
    const [formPhone, setPhone] = useState('')
    const [formMail, setMail] = useState('')
    const [formLocation, setLocation] = useState('')
    const [formHelp, setHelp] = useState('')
    const [formInfos, setInfos] = useState('')
    const [submited, setSubmited] = useState(false)

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

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmited(true)
    }

  return (
    <div className='form_container'>
        {submited ?
        <Thanks />
        :
        <form onSubmit={handleSubmit}>
            <p>Si tu as remarqué un bug, si tu as une question ou si tu t'ennuuies tu peux me contacter via ce formulaire &#128513; </p>
            <label>Name :</label>
            <input type='text' name='name' onChange={handleNameChange} value={formName} required ></input>
            <label>Surname :</label>
            <input type='text' name='subject' onChange={handleSurnameChange} value={formSurname} required ></input>
            <label>Phone :</label>
            <input type='text' name='subject' onChange={handlePhoneChange} value={formPhone} ></input>
            <label>Mail :</label>
            <input type='text' name='subject' onChange={handleMailChange} value={formMail} required ></input>
            <label>Location :</label>
            <input type='text' name='subject' onChange={handleLocationChange} value={formLocation} ></input>
            <label>What can I do for you ?</label>
            <input type='text' name='subject' onChange={handleHelpChange} value={formHelp} required ></input>
            <label>How did you find this place ?</label>
            <input type='text' name='subject' onChange={handleInfosChange} value={formInfos} ></input>
            <button className='button' >Let's go !</button>
        </form>
        }
    </div>
  )
}
