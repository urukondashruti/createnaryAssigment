import React from 'react'
import ReactContext from '../context/ReactContext' 
import {Chrono} from 'react-chrono'
import Item from "../Item"
import Header from "../Header"
import "./index.css";

const items=[{title:"1"},{title:"2"},{title:"3"},{title:"4"}]

const Chronopage = () => {
  return (
    <ReactContext.Consumer>
      {value => {
        const { chronoList } = value

        return (
          <div>
            <Header/>
                   <div className="chrono-container">
              <div className="content-con">
                <h1 className="head"> GetSetYo handholds you at every step of the way</h1>
                <p className="para">You focus on helping your friends and family.we take care of everything else.</p>
                <button type="button" className="get-button">Get Started</button>
              </div>
              <div>
              <Chrono mode="VERTICAL" items={items}>
              {chronoList.map(each => (
                <Item item={each} key={each.id}/>
              ))}
            </Chrono>
              </div>
          </div>
          </div>
        )
      }}
    </ReactContext.Consumer>
  )
}

export default Chronopage;
