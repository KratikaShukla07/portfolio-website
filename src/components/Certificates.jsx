import './Certificates.css';

function Certificates() {
  const certificates = [
    {
      title: 'Cloud Computing',
      platform: 'NPTEL',
      date: "Nov' 25",
      url: 'https://results.nptel.ac.in/',
      icon: '☁️',
      color: '#a855f7',
      skills: ['Cloud', 'Architecture', 'Deployment'],
    },
    {
      title: 'Advanced Software Engineering',
      platform: 'Walmart USA (Forage)',
      date: "Oct' 25",
      url: 'https://www.theforage.com/completion-certificates/prBZoAihniNijyD6d/oX6f9BbCL9kJDJzfg_prBZoAihniNijyD6d_68e73b18ee6654444a8e3df7_1760029081920_completion_certificate.pdf',
      icon: '🏢',
      color: '#06b6d4',
      skills: ['Software Eng.', 'Problem Solving'],
    },
    {
      title: 'Data Structures and Algorithms',
      platform: 'Iamneo (NIIT Venture)',
      date: "Dec' 24",
      url: 'https://lpucolab438.examly.io/certificates',
      icon: '🧠',
      color: '#f43f5e',
      skills: ['DSA', 'Algorithms', 'Logic'],
    }
  ];

  return (
    <section id="certificates" className="certificates">
      <div className="section-container">
        <h2 className="section-title">Certificates</h2>
        <p className="section-subtitle">Continuous learning & growth</p>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card" style={{ '--cert-color': cert.color }}>
              <div className="cert-badge">
                <span className="cert-icon">{cert.icon}</span>
                <div className="cert-verified">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                  </svg>
                  Verified
                </div>
              </div>
              {cert.url ? (
                <a href={cert.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <h3 className="cert-title" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}>
                    {cert.title} ↗
                  </h3>
                </a>
              ) : (
                <h3 className="cert-title">{cert.title}</h3>
              )}
              <div className="cert-meta">
                <span className="cert-platform">{cert.platform}</span>
                <span className="cert-dot">•</span>
                <span className="cert-date">{cert.date}</span>
              </div>
              <div className="cert-skills">
                {cert.skills.map((skill, idx) => (
                  <span key={idx} className="cert-skill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
