import { Link } from 'react-router-dom'
import city from '../assets/city2.png'

// Pages that only exist on the old HTML site link back to it.
const OLD_SITE = 'https://samuelconsuegra37-dev.github.io/itis3135/'

function Header() {
  return (
    <header>
      <h1>Samuel Consuegra's Sneaky Crocodile | ITIS3135</h1>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/introduction">Introduction</Link> |{' '}
        <Link to="/contract">Contract</Link> |{' '}
        <Link to="/about">About</Link> |{' '}
        <a href={OLD_SITE + 'inventory.html'}>Inventory</a> |{' '}
        <a href={OLD_SITE + 'playingcards.html'}>Playing Cards</a> |{' '}
        <a href={OLD_SITE + 'productlanding.html'}>Product Landing</a> |{' '}
        <a href={OLD_SITE + 'survey.html'}>Survey</a> |{' '}
        <a href={OLD_SITE + 'instructions.html'}>Instructions</a> |{' '}
        <a href={OLD_SITE + 'documentation.html'}>Documentation</a> |{' '}
        <a href={OLD_SITE + 'website_evaluations.html'}>Website Evaluations</a> |{' '}
        <a href={OLD_SITE + 'pictures.html'}>Pictures</a> |{' '}
        <a href={OLD_SITE + 'classintroductions.html'}>Class Introductions</a>
      </nav>
      <nav>
        <a href={OLD_SITE + 'stuff/crAppYpAgE1%24%20.HTM'}>CRAPpy Page</a> |{' '}
        <a href={OLD_SITE + 'consuegra.group/'}>Samuel Consuegra Group</a> |{' '}
        <a href={OLD_SITE + 'hobby/index.html'}>Hobby</a> |{' '}
        <a href={OLD_SITE + 'introduction_form.html'}>Introduction Form</a>
      </nav>
      <br />
      <img src={city} alt="A picture of me at the grand canyon" width="200" className="center-img" />
    </header>
  )
}

export default Header
