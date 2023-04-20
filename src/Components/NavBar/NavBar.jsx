import './NavBar.scss'
export default function NavBar() {
  return (
    <nav className='lifting-navbar'>
      <a alt='about' className='lifting-nav-link lifting-nav-link-about' href="">About this Project</a>
      <a alt='squat-info' className='lifting-nav-link' href="">Squats</a>
      <a alt='bench-info' className='lifting-nav-link' href="">Bench</a>
      <a alt='deadlift-info' className='lifting-nav-link' href="">Deadlift</a>
      <a alt='meet-day-info' className='lifting-nav-link' href="">Meet Numbers</a>
    </nav>
  )
}