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
           
        </div>
    )
}
export default Social;