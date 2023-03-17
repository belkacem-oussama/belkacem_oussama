import { presentationText } from '../../data/presentation'
import styles from './styles.css'

export default function PresentationPage() {

    const presentationData = presentationText

  return (
        presentationData.map(text => (
            <div className='text_introduction'>{text.introduction}</div>
        ))
  )
}
