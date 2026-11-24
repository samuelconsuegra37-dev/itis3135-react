import { useEffect } from 'react'

function About() {
  useEffect(() => {
    document.title = "Samuel Consuegra's Sneaky Crocodile | ITIS3135 | About 3135"
  }, [])

  return (
    <>
      <h2>About 3135</h2>
      <p>
        This page is built in part to demonstrate work for the Charlotte class ITIS3135 - Front-End Web Application Development for those sections run by Mr. von Briesen. You may find additional information about this course at{' '}
        <a href="https://divonbriesen.github.io/teaching/itis3135/" target="_blank">ITIS3135 course website</a>.
      </p>
      <p>This course seeks to provide students relevant experience in front-end web application development by building multiple websites using a variety of tools and techniques. </p>
      <h3>Tools Used In The Course</h3>
      <ul>
        <li>VS Code</li>
        <li>Emmet withing VS Code</li>
        <li>SFTP via Filezilla v</li>
        <li>Git via GitHub Desktop and GitHub.com</li>
        <li>Various Browser tools</li>
        <li>The Accumulus Validator</li>
      </ul>
      <h3>The Sites Students Will Build, and Which This Page Links To, Should Include:</h3>
      <ul>
        <li>A personal home portfolio</li>
        <li>This course site</li>
        <li>A design firm site - representing a fictitious/aspirational design/consulting firm for the student and named after them.</li>
        <li>A Crappy page - intended to do all the bad things, so as to avoid them anywhere else</li>
        <li>A whimsical product company</li>
        <li>A student/colleague/peer management tool</li>
        <li>A client project website</li>
      </ul>
    </>
  )
}

export default About
