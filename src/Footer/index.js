import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import Callback from "../RequestCall";
import "./index.css";
const Footer = () => {
       return (
        <div className="footer-con">
            <div className="container">
            <div><Callback/></div>
            <div className="paras-con">
                <p>Navigation</p>
                <p>About Createnary</p>
                <p>Contact Us</p>
                <p>Refund</p>
                <p>NewsLetter</p>
                <p>Terms&Conditions</p>
                <p>Privacy and Policy</p>
            </div>
            <div className="contact-con">
                <p>Contacts</p>
                <p><FontAwesomeIcon className="icons" icon={faMapMarkerAlt} />Delhi,India <br/>
                +91 98765 43210</p>
                <p> <FontAwesomeIcon className="icons" icon={faPhoneAlt} />+91 99999 99999</p>
            </div>
            </div>
            <div>
                <hr className="horizontal"/>
           <h1 className="bottom-heading">Createnary 2024</h1>
            </div>
        </div>
       )
}

export default Footer