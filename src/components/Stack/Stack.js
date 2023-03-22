import React from 'react'
import Card from './Card/Card.js'
import styles from './styles.css'
import frontLogo from '../../assets/front.jpg'
import backLogo from '../../assets/back.jpg'
import toolLogo from '../../assets/tools.jpg'

export default function Stack() {
  return (
    <div className='cards'>
      <Card 
        title='Front-End'
        image={frontLogo}
        text= 'For the interaction !' 
      />
      <Card 
        title='Back-End'
        image={backLogo}
        text= 'For the security !' 
      />
      <Card 
        title='Front-End'
        image={toolLogo}
        text= 'For the interaction !' 
      />
    </div>
  )
}
