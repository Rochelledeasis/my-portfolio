import './portfolio_design.css'
import pic from './assets/pic.png'

function App() {
  return (
    <>
      <header>
        <a href="#" className="logo">Rochelle</a>

        <nav>
          <a href="#" className="active">Home</a>
          <a href="#">Projects</a>
          <a href="#">Education</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section className="home">
        <div className="home-img">
          <img src={pic} alt="Rochelle" />
        </div>

        <div className="home-content">
          <h1>Hi, I'm <span>Rochelle</span></h1>
          <h3 className="typing-text">A Front-End Developer</h3>
          <p>
            Hello, I'm Rochelle, a passionate front-end developer. Looking
            forward to learning and growing in the field.
          </p>

          <div className="social-icons">
            <a href="#"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-x-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default App