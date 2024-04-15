import Header from "../Header";
import "./index.css";

const Mainpage = () => {
    return (
        <div className="background">
             <div className="nav-head">
             <Header/>
             </div>
            <div className="main-container">
            <div className="main-content">
            <h1 className="Welcome-head">
            Welcome To India's First<br/>
            <span className="creator-head">Creator's Marketplace</span>
        </h1>
        <p className="create-head">Create your E-store @Zero Cost</p>
        <p className="para-content">Empower Your creativity with createnary.Showcase,sell and connect with a global audience effortlessly,Turn your products into profits.</p>
        <button type="button" className="started-button">Get Started</button>
        </div>
        <div>
            <img src="https://i.imgur.com/a7LigWR.png" className="main-image" alt="img2"/>
        </div>
            </div>
        </div>
    )
}

export default Mainpage;