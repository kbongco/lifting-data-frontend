import './NavBar.scss'
export default function NavBar() {
  return (
    <nav className='lifting-navbar'>
      <a className='lifting-nav-link lifting-nav-link-about' href="">About this Project</a>
      <a className='lifting-nav-link' href="">Squats</a>
      <a className='lifting-nav-link' href="">Bench</a>
      <a className='lifting-nav-link' href="">Deadlift</a>
      <a className='lifting-nav-link' href="">Meet Numbers</a>
    </nav>
  )
}