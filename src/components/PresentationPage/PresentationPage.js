import { presentationText } from '../../data/presentation'
import styles from './styles.css'

export default function PresentationPage() {

    const presentationData = presentationText

  return (
      <div className='text_div'>
          {presentationData.map(element => (
            <div className='text_introduction'>
                <h1>Me !</h1>
                <p>{element.introduction}</p>
                <a href={element.formation_link} target="_blank">Formation suivie chez O'clock !</a>
            </div>
            ))}
      </div>
  )
}
