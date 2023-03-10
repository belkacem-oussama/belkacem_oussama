import React from 'react'
import styles from './styles.css'
import Card from 'react-bootstrap/Card';
import jkpLogo from '../../assets/jankenpon.jpg'
import tdlLogo from '../../assets/todolist.jpg'
import { datas } from '../../data/data';


export default function Projects() {

    const projectData = datas

    const projectJKP = projectData.map((data) => data.description_JKP)
    const projectTDL = projectData.map((data) => data.description_TDL)

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
    </div>
  )
}
