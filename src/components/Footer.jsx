import { Link } from 'react-router-dom'
import city from '../assets/city2.png'

function Header() {
  return (
    <header>
      <h1>Samuel Consuegra's Sneaky Crocodile | ITIS3135</h1>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/introduction">Introduction</Link> |{' '}
        <Link to="/contract">Contract</Link> |{' '}
        <Link to="/about">About</Link>
      </nav>
      <br />
      <img src={city} alt="A picture of me at the grand canyon" width="200" className="center-img" />
    </header>
  )
}

export default Header
