import githubIcon from "./images/githubIcon.png"
import twitterIcon from "./images/twitterIcon.png"
import youtubeIcon from "./images/youtubeIcon.png"
const Footer = () => {
  /*
  <div className="m-3">
        <h3>Data retrieved from: <a target="_blank" href="https://pipedream.com/@pravin" className="link-primary" >https://pipedream.com/@pravin</a></h3>
      </div>
  */
  return (
    <footer>
      <div className="bg-dark m-0 p-3 row">
        <div className="col d-inline-flex justify-content-between">
          <div className="d-block">
            <h4 className="text-warning">Credits</h4>
            <p className="text-warning fw-light d-block m-0">Data retrieved from: <a rel="noreferrer" target="_blank" href="https://pipedream.com/@pravin" className="link-info" >https://pipedream.com/@pravin</a>. All assets belong to their own rightful owners. No ownership is claimed of third-party assets used in this project.</p>
            <p className="text-warning mb-0 fw-light">
              Page made using React.JS, Replit.com, JavaScript, and Bootstrap 5
            </p>
            <p className="text-warning mt-1 fw-light">
              Project made by TS. For issues/concerns, feel free to email them to <span className="text-info fw-bold">TS28Dev@gmail.com</span>.
            </p>
          </div>

          <div className="ms-4">
            <div className="d-block text-center">
              <p className="text-secondary h5">My links: </p>
            </div>
            <div>
              <a className="me-2" rel="noreferrer" href="https://github.com/ST28Dev" target="_blank"><img src={githubIcon} width="40" height="40" alt="github_icon"></img></a>
              <a className="me-2" rel="noreferrer" href="https://twitter.com/TS_Dev_28" target="_blank"><img src={twitterIcon} width="36" height="36" alt="twitter_icon"></img></a>

              <a className="me-2" rel="noreferrer" href="https://www.youtube.com/@TS_DEV" target="_blank"><img src={youtubeIcon} width="46" height="36" alt="youtube_icon"></img></a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  )
}
export default Footer