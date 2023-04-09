import React, { Component } from 'react'
import BasicSlider from './BasicSlider'
import './Projects.css'

export default class Projects extends Component {
  render() {
   

    return (
      <div className='body3'>
       <div className='hero3'>
        <br></br>
        <p className='showe'>In this slideshow you can introduce with my projects, also their codes.</p>

        <BasicSlider/>
        
        </div>
      </div>
    )
  }
}