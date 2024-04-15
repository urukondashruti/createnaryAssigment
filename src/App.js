// App.js
import { Component } from 'react'
import {Route, Routes,BrowserRouter} from 'react-router-dom'
import Chronopage from "./Chronopage"
import Home from "./Home";
import ReactContext from './context/ReactContext'
import Footer from "./Footer";
import './App.css'

class App extends Component {
  state = { pageDetails: {} ,
  chronoList:[]
  }

  changeDetails = fetchedObject => {
    this.setState({ pageDetails: fetchedObject })
  }

  changeChrono = (fetchedList) => {
    this.setState({ chronoList: fetchedList })
  }

  render() {
    const { pageDetails,chronoList } = this.state
    return (
      <ReactContext.Provider
        value={{ pageDetails,chronoList, changeDetails: this.changeDetails,changeChrono:this.changeChrono }}
      >
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/chrono" element={<Chronopage/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
      </ReactContext.Provider>
    )
  }
}

export default App; // Add a semicolon here
