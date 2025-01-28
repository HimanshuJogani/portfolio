import './Skills.css'

const Skills = () => {
  const skillsData = {
    frontend: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js'],
    backend: ['Node.js', 'Python', 'Java', 'SQL', 'MongoDB'],
    tools: ['Git', 'Docker', 'AWS', 'Agile', 'CI/CD']
  }

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-content">
        <div className="skill-category">
          <h3>Frontend</h3>
          <ul>
            {skillsData.frontend.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skill-category">
          <h3>Backend</h3>
          <ul>
            {skillsData.backend.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skill-category">
          <h3>Tools & Others</h3>
          <ul>
            {skillsData.tools.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills 