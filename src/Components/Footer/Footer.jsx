import "./Footer.css"
import WaveyBox from "../WaveyBox/WaveyBox"
import image from "../../assets/footer_bg.png"

export default function Footer(){
    return(
        <footer className="Footer">
            <div className="Links-Container">
                <div className="List-Items">
                    <h6>Links</h6>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                    <li>Help</li>
                </div>
            </div>
        </footer>
    )
}