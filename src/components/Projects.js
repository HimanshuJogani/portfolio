import './Projects.css'

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'ABC Talkies App',
            description: 'A unique pay-per-view cinema marketplace offering independent films across genres, formats, and languages. Viewers can enjoy content like short films, documentaries, and feature films at affordable prices without subscriptions.',
            tech: ['Swift', 'iOS', 'Xcode'],
            appLink: 'https://apps.apple.com/in/app/abc-talkies/id1586757822'
        },
        {
            id: 2,
            title: 'Olympic App (NZ Team)',
            description: 'Developed an iOS application for New Zealand Olympic team players, providing detailed information about medals won by specific players. Built using SwiftUI with modern iOS development practices.',
            tech: ['SwiftUI', 'iOS', 'Xcode'],
            appLink: 'https://apps.apple.com/nz/app/nz-team/id6504589269'
        },
        {
            id: 3,
            title: 'Divizable App',
            description: 'A comprehensive household cataloging app with features like item organization, group chat, shipping label creation, and AR-based measurements. Integrated ShipEngine™ API for shipping functionality.',
            tech: ['Flutter', 'Dart', 'Node.js', 'iOS']
        },
        {
            id: 4,
            title: 'Ventive App',
            description: 'Multi-module application system including three mobile apps and a web app, enabling users to purchase and manage gift cards from various merchants.',
            tech: ['Flutter', 'Dart', 'Android', 'iOS']
        },
        {
            id: 5,
            title: 'Travelsy (MakeMyTrip Clone)',
            description: 'Led the development of a comprehensive travel booking platform clone, implementing features for hotel, tour, and flight bookings. Successfully delivered a B2C model benefiting both service providers and users.',
            tech: ['Flutter', 'Dart', 'Node.js', 'TypeScript'],
            githubLink: 'https://github.com/RxMobile-Dummy/Travel_Project_2022'
        },
        {
            id: 6,
            title: 'Dom and Dom Pro',
            description: 'Developed a luxury hair service platform with three modules: user app (Dom), provider app (Dom Pro), and admin panel. Implemented seamless booking and service management features.',
            tech: ['Swift', 'iOS']
        }
    ]

    return (
        <section id="projects" className="projects">
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
                {projects.map(project => (
                    <div key={project.id} className="project-card">
                        <h3 className="project-title">
                            {project.appLink || project.githubLink ? (
                                <a href={project.appLink || project.githubLink} target="_blank" rel="noopener noreferrer">
                                    {project.title}
                                    <i className="fas fa-external-link-alt"></i>
                                </a>
                            ) : (
                                project.title
                            )}
                        </h3>
                        <p>{project.description}</p>
                        <div className="tech-stack">
                            {project.tech.map((tech, index) => (
                                <span key={index} className="tech-badge">{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects 