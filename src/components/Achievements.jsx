import { useState, useEffect, useRef } from 'react';
import './Achievements.css';

function Achievements() {
  const [isVisible, setIsVisible] = useState(false);
  const achRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (achRef.current) observer.observe(achRef.current);
    return () => observer.disconnect();
  }, []);

  const platforms = [
    {
      name: 'LeetCode',
      color: '#ffa116',
      url: 'https://leetcode.com/u/kratikashukla/',
      bg: 'rgba(255, 161, 22, 0.1)',
      badge: '🏆 200+ Solved',
      stats: [
        { label: 'Problems Solved', value: 200, suffix: '+' },
        { label: 'Topics', value: 'Data Structures', isText: true },
        { label: 'Focus', value: 'Algorithms', isText: true },
      ],
      ring: 85,
    },
    {
      name: 'Hackathons',
      color: '#6366f1',
      url: 'https://unstop.com/certificate-preview/ae78c24a-5ccd-47e4-8368-5f83ab7a37f3',
      bg: 'rgba(99, 102, 241, 0.1)',
      badge: '⭐ PRAGYAN\'26',
      stats: [
        { label: 'Event', value: 'Ingenium', isText: true },
        { label: 'Type', value: 'Hardware', isText: true },
        { label: 'Role', value: 'Participant', isText: true },
      ],
      ring: 90,
    },
  ];

  return (
    <section id="achievements" className="achievements" ref={achRef}>
      <div className="section-container">
        <h2 className="section-title">Competitive Programming</h2>
        <p className="section-subtitle">Problem solving & algorithmic thinking</p>
        <div className="achievements-grid">
          {platforms.map((platform, index) => (
            <div key={index} className="achievement-card" style={{ '--platform-color': platform.color }}>
              <div className="achievement-visual">
                <svg className="progress-ring" viewBox="0 0 120 120">
                  <circle className="ring-bg" cx="60" cy="60" r="50" />
                  <circle
                    className="ring-fill"
                    cx="60" cy="60" r="50"
                    style={{
                      strokeDasharray: `${2 * Math.PI * 50}`,
                      strokeDashoffset: isVisible
                        ? `${2 * Math.PI * 50 * (1 - platform.ring / 100)}`
                        : `${2 * Math.PI * 50}`,
                      stroke: platform.color,
                    }}
                  />
                </svg>
                <div className="ring-label">
                  <span className="ring-value">{platform.ring}%</span>
                  <span className="ring-text">Proficiency</span>
                </div>
              </div>
              <div className="achievement-info">
                {platform.url ? (
                  <a href={platform.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <h3 className="achievement-platform" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}>
                      {platform.name} ↗
                    </h3>
                  </a>
                ) : (
                  <h3 className="achievement-platform">{platform.name}</h3>
                )}
                <span className="achievement-badge" style={{ background: platform.bg, color: platform.color }}>
                  {platform.badge}
                </span>
                <div className="achievement-stats">
                  {platform.stats.map((stat, idx) => (
                    <div key={idx} className="ach-stat">
                      <span className="ach-stat-value" style={{ color: platform.color }}>
                        {stat.isText ? stat.value : (
                          <>{isVisible ? <AnimCounter end={stat.value} /> : 0}{stat.suffix}</>
                        )}
                      </span>
                      <span className="ach-stat-label">{stat.label}</span>
                    </div>
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

function AnimCounter({ end }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const inc = end / (duration / 16);
    const timer = setInterval(() => {
      start += inc;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [end]);
  return <>{count}</>;
}

export default Achievements;
