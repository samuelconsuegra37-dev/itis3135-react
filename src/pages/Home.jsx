import { useEffect } from 'react'

function Home() {
  useEffect(() => {
    document.title = "Samuel Consuegra's Sneaky Crocodile | ITIS3135 | Home"
  }, [])

  return (
    <>
      <h2>Home</h2>
      <p>Here will be all my content for this class.</p>
    </>
  )
}

export default Home
