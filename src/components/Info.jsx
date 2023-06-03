
import profilePic from '../assets/sarvesh_sawant.png'
import email from '../assets/email.png'
import linkedin from '../assets/linkedin.png'

export default function Info(){
    return (
        <div className="info">
            <img src={profilePic} alt='profile picture' className="info--profile-pic"/>
            <h1 className="info--name">Sarvesh Sawant</h1> 
            <h3 className="info--title">Senior Software Engineer</h3>
            <h4 className="info--website">sarveshsawant.com</h4>
            <div className="info--btns">
                <a className="info--mailto" href="mailto:mailsarveshsawant@gmail.com">Email<img src={email} /></a>
                <a className="info--linkedin" href="https://www.linkedin.com/in/sarvesh-sawant-37b0b31a9/">Linkedin<img src={linkedin} /></a>
            </div>
        </div>
    )
}