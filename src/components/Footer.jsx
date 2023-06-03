
import twitterIcon from "../assets/twitter.png"
import facebookIcon from "../assets/facebook.png"
import instagramIcon from "../assets/instagram.png"
import githubIcon from "../assets/github.png"

export default function Footer() {
    return (
        <div className="footer">
            <a href="https://twitter.com/sarveshsawant_"><img src={twitterIcon} className="footer--twitter-icon"></img></a>
            <a href="https://www.facebook.com/darknebula123"><img src={facebookIcon} className="footer--facebook-icon"></img></a>
            <a href="https://www.instagram.com/sarveshsawant72/"><img src={instagramIcon} className="footer--instagram-icon"></img></a>
            <a href="https://github.com/sarvesh-sawant"><img src={githubIcon} className="footer--github-icon"></img></a>
        </div>
    )
}