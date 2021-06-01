import './Social.css'

const Social = () => {
    return (
        <div className="social">
            <h4 className="title-social">Social Accounts</h4>
           <div>
                <h2><img className="github" src="https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg" />
                <p className="git-p"><a className="social-link" href="https://github.com/malabdullah89">GitHub</a></p>
                </h2>
           </div>

           <div>
                <h2><img className="youtube" src="https://lh3.googleusercontent.com/proxy/VqPgQGXAeE0VuK-rRhuuORcHYMYC-oQ91oBJ6Lt28UuoecPt40mDYot8XaTxMl6-7U4I7XDvf0LrVBpTWYCpjVemufvTCqAj6c6Cxfvty9XHyjC0smhWXGAa7koDqLA" />
                <p className="git-p"><a className="social-link" href="https://www.youtube.com/channel/UCzHIbPbXhTAAGJldx1iYUGw">Youtube</a></p>
                </h2>
           </div>

           <div>
                <h2><img className="instagram" src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png" />
                <p className="git-p"><a className="social-link" href="https://www.instagram.com/mohmdev/">Instagram</a></p>
                </h2>
           </div>

           <div>
                <h2><img className="instagram" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" />
                <p className="git-p"><a className="social-link" href="https://twitter.com/alabdullahm">Twiter</a></p>
                </h2>
           </div>
           
        </div>
    )
}
export default Social;