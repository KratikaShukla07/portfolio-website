import { useState, useEffect, useRef } from 'react';
import './Skills.css';

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Languages',
      icon: '💬',
      color: '#4285F4',
      skills: ['C++', 'Python', 'JavaScript', 'SQL']
    },
    {
      title: 'Web Tech',
      icon: '🌐',
      color: '#34A853',
      skills: ['HTML/CSS', 'Responsive Design', 'React.js']
    },
    {
      title: 'Backend/Databases',
      icon: '🗄️',
      color: '#FBBC04',
      skills: ['REST APIs', 'MySQL', 'SQLite']
    },
    {
      title: 'AI/ML & Tools',
      icon: '🤖',
      color: '#EA4335',
      skills: ['Machine Learning', 'NLP & OCR', 'Pandas/NumPy', 'Streamlit', 'Git/GitHub']
    },
    {
      title: 'Core Concepts',
      icon: '🧠',
      color: '#4285F4',
      skills: ['Data Structures', 'Algorithms', 'OOP']
    }
  ];

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">A diverse toolkit for modern applications</p>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-card-header">
                <div className="skill-icon-wrap" style={{ backgroundColor: `${category.color}15`, color: category.color }}>
                  {category.icon}
                </div>
                <h3 className="skill-category">{category.title}</h3>
              </div>
              <div className="skill-chips">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className={`skill-chip ${isVisible ? 'animate-in' : ''}`}
                    style={{ 
                      '--chip-color': category.color,
                      transitionDelay: `${idx * 0.1}s` 
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
