import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'AI-NutriCare',
      subtitle: 'Personalized Diet Plan Generator',
      date: "Mar' 26",
      github: 'https://github.com/KratikaShukla07/Personalized-Diet-Plan-Generator',
      image: '/ai_nutricare_1774291019382.png',
      color: '#6366f1',
      metrics: [
        { value: '100+', label: 'Reports Parsed' },
        { value: 'AI', label: 'ML & NLP' },
        { value: 'UI', label: 'Streamlit' },
      ],
      tech: ['Python', 'Scikit-learn', 'NLP', 'OCR']
    },
    {
      title: 'Music Playlist Manager',
      subtitle: 'Console App for Song Management',
      date: "Jul' 25",
      github: 'https://github.com/KratikaShukla07/Music_Playlist_Manager',
      image: '/playlist_manager_1774291039849.png',
      color: '#14b8a6',
      metrics: [
        { value: 'Data', label: 'File Storage' },
        { value: 'O(1)', label: 'Search' },
        { value: 'OOP', label: 'Architecture' },
      ],
      tech: ['C++', 'OOP', 'File Handling']
    },
    {
      title: 'Skyland Arcade',
      subtitle: 'Web Game Platform',
      date: "Apr' 25",
      github: 'https://github.com/KratikaShukla07/Skyland-Arcade-by-Kratika',
      image: '/skyland_arcade_1774291056215.png',
      color: '#d946ef',
      metrics: [
        { value: 'Multi', label: 'Mini-games' },
        { value: 'UI', label: 'Responsive' },
        { value: 'Web', label: 'Dynamic JS' },
      ],
      tech: ['HTML', 'CSS', 'JavaScript']
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Building scalable solutions with modern tech</p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" style={{ '--project-color': project.color }}>
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-image-overlay">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-view-btn"
                  >
                    <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                    </svg>
                    View Source
                  </a>
                </div>
              </div>
              <div className="project-info">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-date">{project.date}</span>
                </div>
                <p className="project-subtitle">{project.subtitle}</p>
                <div className="project-metrics">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="metric">
                      <span className="metric-value">{metric.value}</span>
                      <span className="metric-label">{metric.label}</span>
                    </div>
                  ))}
                </div>
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
