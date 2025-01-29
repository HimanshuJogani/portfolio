import './Hero.css'

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1>Hi, I'm <span className="highlight">Himanshu Jogani</span></h1>
                <h2>Software Engineer</h2>
                <p>I Craft <strong>Innovative</strong> <span className="gradient-text">Mobile Applications</span> ✨</p>
                <div className="cta-buttons">
                    <a href="#projects" className="btn primary">View My Work</a>
                    <a href="#contact" className="btn secondary">Contact Me</a>
                    <a
                        href="https://drive.google.com/file/d/1kq03z8i-FTwIbRMv8h5V_Qpsl_Y_GdQY/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn download"
                    >
                        <span>Download CV</span>
                        <i className="fas fa-download"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero 