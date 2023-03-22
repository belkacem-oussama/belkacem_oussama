import Card from './Card/Card.js'
import styles from './styles.css'
import frontLogo from '../../assets/front.jpg'
import backLogo from '../../assets/back.jpg'
import toolLogo from '../../assets/tools.jpg'


export default function Stack() {

  const handleShowMoreValue = (showMoreValue) => {
    console.log(showMoreValue);
  }

  return (
    <div className='cards'>
      <Card 
        title='Front-End'
        image={frontLogo}
        text= 'For the interaction !'
        onShowMoreChange = {handleShowMoreValue}
      />
    </div>
  )
}
