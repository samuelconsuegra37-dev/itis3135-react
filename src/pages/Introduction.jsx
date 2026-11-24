import { useEffect } from 'react'
import profile from '../assets/profile2.jpg'

function Introduction() {
  useEffect(() => {
    document.title = "Samuel Consuegra's Sneaky Crocodile | ITIS3135 | Introduction"
  }, [])

  return (
    <>
      <h2>Introduction</h2>
      <figure>
        <img src={profile} alt="me at atkins" width="200" />
        <figcaption>Atkins Library</figcaption>
      </figure>
      <h6>Samuel Consuegra | Sneaky Crocodile</h6>
      <p>
        Hey, my name is Samuel Consuegra. I’m 20 years old and I’m a junior studying computer science concentrating in Cybersecurity.
        For fun I like to watch movies and play single player games like RDR2. I’m also really into computers,
        specifically PC hardware, cars, and occasionally I like to play the guitar.
      </p>
      <ul>
        <li>Personal Background: I was born and raised in Miami, Florida and I moved to Belmont, NC, when I was 16.</li>
        <li>Professional Background: I’ve worked as a line cook in the summers</li>
        <li>Academic Background: Computer Science, junior year, concentrating in Cybersecurity</li>
        <li>Primary work computer: Asus Laptop, Windows 11, Version 25h2</li>
        <li>Primary Work Location: My home bedroom</li>
        <li>Alternate Computer &amp; Location: For computer, my main desktop I use at home, for location, anywhere on on campus</li>
        <li>
          Courses I’m taking and why:
          <ol>
            <li>MATH 1242 - Calculus II: for math requirements</li>
            <li>ITSC3146 - Introduction to Operating Systems &amp; Networking: It’s an interesting topic</li>
            <li>ITIS3135 - Front End Web Application Development: very intrigued about the topic and it will be very useful</li>
            <li>ITIS 3200: Introduction to Info Security and Privacy: Very interesting and relevant to my concentration</li>
            <li>ITSC Computing and AI: Ethics, Society and Communication: Very interested in the topic these days</li>
          </ol>
        </li>
      </ul>
    </>
  )
}

export default Introduction
