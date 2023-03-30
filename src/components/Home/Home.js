import { useState, useEffect } from 'react'
import styles from './styles.scss'

export default function Home() {

  const [welcomeMessageIndex, setWelcomeMessageIndex] = useState(0)

  const welcomeMessageArray = [
    'Welcome on my personal page !',
    'Bienvenue sur ma page personnelle !',
    '¡Bienvenido a mi página personal !',
    'Willkommen auf meiner persönlichen Seite!',
    '私の個人ページへようこそ！',
    'أهلاً وسهلاً في صفحتي الشخصية!',
  ]

  useEffect(() => {
    const timerId = setTimeout(() => {
      setWelcomeMessageIndex((welcomeMessageIndex + 1) % welcomeMessageArray.length)
    }, 5000)
 
    return() => {
      clearTimeout(timerId)
    }
  }, [welcomeMessageIndex])

  const welcomeMessage = welcomeMessageArray[welcomeMessageIndex]

  return (
      <div className='presentation'>
          <div className='presentation_title'>
            <h1 className='presentation_title_title'>{welcomeMessage}</h1>
          </div>
          <p>(click top left to navigate...)</p>
      </div>
  )
}
