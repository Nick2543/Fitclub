import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData';
import RightArrow from "../../assets/rightArrow.png";
const Programs = () => {
  return (
    <div className="Programs" id="programs">
        {/* Header */}
        <div className="programs-header">
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to Shape You</span>
        </div>
        <div className="programs-categories">
            {programsData.map((programsData)=>(
                <div className="category">
                    {programsData.image}
                    <span>{programsData.heading}</span>
                    <span>{programsData.details}</span>
                    <div className="join-now">
                        <span>Join Now</span>
                        <img src={RightArrow} alt="" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs;