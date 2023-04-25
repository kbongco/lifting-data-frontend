import './NavBar.scss'
export default function NavBar() {
  return (
    <nav className='lifting-navbar'>
      <a alt='about' className='lifting-nav-link lifting-nav-link-about' href="/about">About this Project</a>
      <a alt='squat-info' className='lifting-nav-link' href="/squats">Squats</a>
      <a alt='bench-info' className='lifting-nav-link' href="/bench">Bench</a>
      <a alt='deadlift-info' className='lifting-nav-link' href="/deadlifts">Deadlift</a>
      <a alt='meet-day-info' className='lifting-nav-link' href="/meet-results">Meet Numbers</a>
    </nav>
  )
}