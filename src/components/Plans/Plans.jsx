import React from 'react'
import './Plans.css'
import {plansData} from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png"
const Plans = () => {
  return (
    <div className="plans-container">
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className="programs-header" style={{gap: "2rem", textTransform: "uppercase"}}>
            <span className='stroke-text'>ready to start</span>
            <span> your journey</span>
            <span className='stroke-text'> now with us</span>
        </div>
        {/* plans card */}
        <div className="plans">
            {plansData.map((plansData, i)=>(
                <div className="plan" key={i}>
                    {plansData.icon}
                    <span>{plansData.name}</span>
                    <span>$ {plansData.price}</span>
                    <div className="features">
                        {plansData.features.map((feature, i)=> (
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <span>See more benefits -{'>'}</span>
                    </div>
                    <button className='btn'>Join now</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans;