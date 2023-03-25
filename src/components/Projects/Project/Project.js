import React from 'react'
import { datas } from '../../../data/data'

export default function Project() {

const projectDatas = datas

  return (
        projectDatas.map(project => (
            <div className='projects_card'>
                <div className='projects_card_pic'>
                    <img src={project.picture}></img>
                </div>
                <div className='projects_card_text'>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                    <p>{project.tech}</p>
                    <a href={project.link} target="_blank">You can try it here !</a>
                </div>
            </div>
        )))
}
