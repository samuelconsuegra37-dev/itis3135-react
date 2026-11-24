import { useEffect } from 'react'

function Contract() {
  useEffect(() => {
    document.title = "Samuel Consuegra's Sneaky Crocodile | ITIS3135 | Contract"
  }, [])

  return (
    <>
      <h2>Contract</h2>
      <p>I, Samuel Consuegra agree to abide by the terms of the course contract in my Fall 2026, ITIS3135, Front End Web Application Development with my instructor, Professor D.I. von Briesen.</p>
      <p>I understand that all work that I do on publicly available online tools will be available to the world and will not put information there that is inappropriate for schoolwork, or that I wish to keep private.</p>
      <p>I also understand that it is my work that counts for attendance, not logins or showing up for class. As such, failure to turn in assignments may show as absences.</p>
      <p>I also understand that given the structure and content of this class it’s possible to find many examples online or even view my classmates’ code directly.</p>
      <p>I swear that I will only use these resources to learn and will not cut and paste code except where I have properly given credit and never from my classmates.</p>
      <p>Signed: <em>Samuel Consuegra, 9/05/2026</em></p>
    </>
  )
}

export default Contract
