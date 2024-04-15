import React, { Component} from "react";
import {Link} from "react-router-dom";
import Audience from "../Audience";
import Mainpage from "../Mainpage";
import Earnings from "../Earnings";
import Questions from "../Questions"
import ReactContext from '../context/ReactContext';
import "./index.css";
class Home extends Component {
  state = {
    fetchData: {},
    changeList: []
  };

  componentDidMount() {
    this.pageDetails();
  }

  pageDetails = async () => {
    const apiUrl = `http://localhost:3003/getdata`;
    const options = {
      method: "GET"
    };
    const response = await fetch(apiUrl, options);
    if (response.ok) {
      const fetchedData = await response.json();
      this.setState({
        fetchData: fetchedData[0],
        changeList: fetchedData.slice(fetchedData.length - 4)
      }, () => {
        this.updateContext(); // Call updateContext after state is set
      });
    }
  };

  updateContext = () => {
    const { fetchData, changeList } = this.state;
    const { changeDetails, changeChrono } = this.context; // Access context here
    changeDetails(fetchData);
    changeChrono(changeList);
  };

  render() {
    return (
      <div>
        <Mainpage />
        <Audience />
        <Earnings />
        <Questions/>
      </div>
    );
  }
}

Home.contextType = ReactContext; // Set contextType for class component

export default Home;
