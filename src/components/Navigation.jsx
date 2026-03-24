import { useState, useEffect } from 'react';
import './Navigation.css';

function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="nav-logo">Kratika Shukla</div>
                <ul className="nav-menu">
                    <li onClick={() => scrollToSection('home')}>Home</li>
                    <li onClick={() => scrollToSection('skills')}>Skills</li>
                    <li onClick={() => scrollToSection('projects')}>Projects</li>
                    <li onClick={() => scrollToSection('achievements')}>Achievements</li>
                    <li onClick={() => scrollToSection('education')}>Education</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
