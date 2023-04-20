import './Footer.scss'
import { GrLinkedin, GrGithub } from "react-icons/gr";

export default function Footer() { 
  return (
    <footer className='lifting-footer'>
      <section className='lifting-footer-text'>
        <div className='lifting-footer-general-information'>
          <div className='lifting-footer-basic-information'>
            <p>Created by: Kathleen B</p>
            <a className='lifting-footer-portfolio-link' href='https://kbongco-portfolio.netlify.app/' alt='portfolio-site'>Portfolio Site</a>
          </div>
        </div>
        <div className='lifting-footer-social-information'>
          <div className='lifting-linkedIn-icon-container'>
            <a className='lifting-linkedIn-link' alt='linkedin-profile' href='https://www.linkedin.com/in/kathleen-bongco-11843197/'><GrLinkedin /></a>
          </div>
          <div className='lifting-github-icon-container'>
            <a className='lifting-github-link' alt='github-profile'href='http://github.com/kbongco'><GrGithub/></a>
          </div>
        </div>
      </section>
    </footer>
  )
}