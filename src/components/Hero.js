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
                        href="/resume.pdf"
                        download="Himanshu_Jogani_Resume.pdf"
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