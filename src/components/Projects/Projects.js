import React from 'react'
import styles from './styles.css'
import jkpLogo from '../../assets/jankenpon.jpg'
import tdlLogo from '../../assets/todolist.jpg'
import itubeLogo from '../../assets/itube.jpg'
import wtmLogo from '../../assets/wtm.jpg'
import { datas } from '../../data/data';

export default function Projects() {

    const projectData = datas

    const projectJKP = projectData.map((data) => data.description_JKP)
    const projectTDL = projectData.map((data) => data.description_TDL)
    const projectItube = projectData.map((data) => data.description_Itube)
    const projectWTM = projectData.map((data) => data.description_WTM)

  return (
    <div className='projects'>
        <div className='projects_first'>
            <div className='projects_first_pic'>
                <img src={jkpLogo}></img>
            </div>
            <div className='projects_first_text'>
                <h1>Jan-Ken-Pon</h1>
                <p>{projectJKP}</p>
                <a href='#' target="_blank">You can try it here ! </a>
            </div>
        </div>
        <div className='projects_first'>
            <div className='projects_first_pic'>
                <img src={tdlLogo}></img>
            </div>
            <div className='projects_first_text'>
                <h1>TodoList (...who didn't code it ?)</h1>
                <p>{projectTDL}</p>
                <a href='#' target="_blank">You can try it here ! </a>
            </div>
        </div>
        <div className='projects_first'>
            <div className='projects_first_pic'>
                <img src={itubeLogo}></img>
            </div>
            <div className='projects_first_text'>
                <h1>Itube ! The clone ! (...or not)</h1>
                <p>{projectItube}</p>
                <a href='#' target="_blank">You can try it here ! </a>
            </div>
        </div>
        <div className='projects_first'>
            <div className='projects_first_pic'>
                <img src={wtmLogo}></img>
            </div>
            <div className='projects_first_text'>
                <h1>What's the movie ?</h1>
                <p>{projectWTM}</p>
                <a href='#' target="_blank">You can try it here ! </a>
            </div>
        </div>
    </div>
  )
}
