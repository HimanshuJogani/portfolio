import './Skills.css'

const Skills = () => {
    const skillsData = {
        frontend: ['Flutter', 'iOS', 'Swift', 'SwiftUI', 'Dart'],
        backend: ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'REST APIs'],
        tools: ['Git', 'Xcode', 'Android Studio', 'VS Code', 'Postman']
    }

    return (
        <section id="skills" className="skills">
            <h2 className="section-title">Skills</h2>
            <div className="skills-content">
                <div className="skill-category">
                    <h3>Mobile Development</h3>
                    <ul>
                        {skillsData.frontend.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className="skill-category">
                    <h3>Backend Development</h3>
                    <ul>
                        {skillsData.backend.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className="skill-category">
                    <h3>Tools & Technologies</h3>
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