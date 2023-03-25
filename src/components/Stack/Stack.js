import styles from './styles.css'
import CardComponent from './Card/Card.js'

import frontLogo from '../../assets/front.jpg'
import backLogo from '../../assets/back.jpg'
import toolLogo from '../../assets/tools.jpg'

import jsLogo from '../../assets/js.png'
import reactLogo from '../../assets/reactJs.png'
import reduxLogo from '../../assets/redux.png'

import phpLogo from '../../assets/php.png'
import symfoLogo from '../../assets/symfony.png'
import laravelLogo from '../../assets/laravel.png'

import gitLogo from '../../assets/git.png'
import gitHubLogo from '../../assets/github.png'
import bootstrapLogo from '../../assets/bootstrap.png'


export default function Stack() {

  return (
    <div className='cards'>
      <CardComponent 
        title='Front-End'
        image={frontLogo}
        text= 'For the interaction !'
        backTitle = 'JavaScript Technologies'
        backText = 'JS for the interaction, ReactJS and Redux for the speed !'
        backImage1 = {jsLogo}
        backImage2 = {reactLogo}
        backImage3 = {reduxLogo}
      />
      <CardComponent
        title='Back-End'
        image={backLogo}
        text= 'For features !'
        backTitle = 'PHP Technologies'
        backText = 'PHP for the server & security, Symony/Laravel to make it faster !'
        backImage1 = {phpLogo}
        backImage2 = {symfoLogo}
        backImage3 = {laravelLogo}
      />
      <CardComponent
        title='Tools'
        image={toolLogo}
        text= 'To help me !'
        backTitle = 'Other Technologies'
        backText = 'Git to save my code, GitHub to stock it and Bootstrap to save time !'
        backImage1 = {gitLogo}
        backImage2 = {gitHubLogo}
        backImage3 = {bootstrapLogo}
      />
    </div>
  )
}
