import './Education.css';

function Education() {
  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Lovely Professional University',
      location: 'Phagwara, Punjab',
      period: "Jul' 23 – Present",
      grade: '7.00 CGPA',
      color: '#4285F4', // Blue
      icon: '🎓',
    },
    {
      degree: 'Intermediate (PCM)',
      institution: 'Morning Star Children’s Academy',
      location: 'Orai Jalaun, UP',
      period: "Mar' 21 – May' 22",
      grade: '69%',
      color: '#EA4335', // Red
      icon: '🏫',
    },
    {
      degree: 'Matriculation',
      institution: 'Morning Star Children’s Academy',
      location: 'Orai Jalaun, UP',
      period: "Mar' 19 – May' 20",
      grade: '63%',
      color: '#FBBC04', // Yellow
      icon: '📚',
    }
  ];

  return (
    <section id="education" className="education">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">Academic background and qualifications</p>
        
        <div className="education-list">
          {education.map((edu, index) => (
            <div key={index} className="edu-material-card">
              <div className="edu-icon-container" style={{ backgroundColor: `${edu.color}15`, color: edu.color }}>
                {edu.icon}
              </div>
              
              <div className="edu-content">
                <div className="edu-header">
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <span className="edu-period">{edu.period}</span>
                </div>
                
                <h4 className="edu-institution">{edu.institution}</h4>
                
                <div className="edu-footer">
                  <span className="edu-location">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    {edu.location}
                  </span>
                  
                  <span className="edu-grade" style={{ color: edu.color, backgroundColor: `${edu.color}10` }}>
                    {edu.grade}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
