// Audience.js
import React from 'react'
import {Link} from "react-router-dom";
import MyCarousel from '../carousel';
import ReactContext from '../context/ReactContext' // Adjust the import path
import "./index.css";

const Audience = () => {
  return (
    <ReactContext.Consumer>
      {value => {
        const { pageDetails } = value
        const { head, para, img1 } = pageDetails

        return (
         <div className="audience-con">
            <h1 className="audience-head">{head}</h1>
            <p className="audience-para">{para}</p>
            <MyCarousel img={img1} />
            <Link to="/chrono">
            <button type="button" className="try-button">Try for free</button></Link>
         </div>
        )
      }}
    </ReactContext.Consumer>
  )
}

export default Audience;
