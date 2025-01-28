import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project Name 1',
      description: 'Description of your first project. Explain what you built and the technologies used.',
      image: '/project1-image.jpg',
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'Project Name 2',
      description: 'Description of your second project. Explain what you built and the technologies used.',
      image: '/project2-image.jpg',
      demoLink: '#',
      githubLink: '#'
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.demoLink} className="btn">Live Demo</a>
              <a href={project.githubLink} className="btn">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects 