import './Social.css'
import youtubeLogo from './youtube-logo.png'
import github from './370919.png'
import instagram from './instagram.png'
import twitter from './377674.png'

const Social = () => {
    return (
        <div className="social">
            <h4 className="title-social">Social Accounts</h4>
           <div>
                <h2><a href="https://github.com/malabdullah89"><img className="github" src={github} /></a>
                <p className="git-p"><a className="social-link" href="https://github.com/malabdullah89">GitHub</a></p>
                </h2>
           </div>

           <div>
                <h2><a href="https://www.youtube.com/channel/UCzHIbPbXhTAAGJldx1iYUGw"><img className="youtube" src={youtubeLogo} /></a>
                <p className="git-p"><a className="social-link" href="https://www.youtube.com/channel/UCzHIbPbXhTAAGJldx1iYUGw">Youtube</a></p>
                </h2>
           </div>

           <div>
                <h2><a href="https://www.instagram.com/mohmdev/</h2>"><img className="instagram" src={instagram} /></a>
                <p className="git-p"><a className="social-link" href="https://www.instagram.com/mohmdev/">Instagram</a></p>
                </h2>
           </div>

           <div>
                <h2><a href="https://twitter.com/alabdullahm"><img className="twitter" src={twitter} /></a>
                <p className="git-p"><a className="social-link" href="https://twitter.com/alabdullahm">Twitter</a></p>
                </h2>
           </div>
           
        </div>
    )
}
export default Social;