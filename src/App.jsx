import './portfolio_design.css'
import pic from './assets/pic.png'

function App() {
  const goTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header>
        <span className="logo" onClick={() => goTo('home')}>Rochelle</span>
        <nav>
          <button onClick={() => goTo('home')}>Home</button>
          <button onClick={() => goTo('projects')}>Projects</button>
          <button onClick={() => goTo('education')}>Education</button>
          <button onClick={() => goTo('contact')}>Contact</button>
        </nav>
      </header>

      <section id="home" className="home">
        <img src={pic} alt="Rochelle" />
        <div>
          <h1>Hi, I'm <span>Rochelle</span></h1>
          <h3>A Front-End Developer</h3>
          <p>
            Hello, I'm Rochelle, a passionate front-end developer. Looking
            forward to learning and growing in the field.
          </p>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <p>ALDAY DENTAL CLINIC</p>
      </section>

      <section id="education">
        <h2>Education</h2>
        <p>Elementary: FLAVIANO PELAGIA PANTOJA MEMORIAL ELEMENTARY SCHOOL</p>
        <p>High School: BALAYAN NATIONAL HIGH SCHOOL</p>
        <p>Senior High School: BALAYAN SENIOR HIGH SCHOOL</p>
        <p>College:BATANGAS STATE UNIVERSITY </p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>09859125613</p>
        <p>deasisrochelle31@gmail.com</p>
      </section>
    </>
  )
}

export default App
