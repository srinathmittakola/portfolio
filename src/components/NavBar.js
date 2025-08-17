import React, { useState } from "react";


export default function Navbar() {

    const [activeSection, setActiveSection] = useState('Home');


    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            setActiveSection(sectionId);
        }
    };

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        scrollToSection(sectionId);
    };

    return <nav className="navbar">
        <div className="logo">Portfolio</div>
        <ul>
            <li><a
                href="#profile"
                className={activeSection === 'profile' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'profile')}
            >
                Profile
            </a></li>
            <li><a
                href="#about"
                className={activeSection === 'about' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'about')}
            >
                About
            </a></li>
            <li><a
                href="#projects"
                className={activeSection === 'projects' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'projects')}
            >
                Projects
            </a></li>
            <li><a
                href="#experience"
                className={activeSection === 'experience' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'experience')}
            >
                experience
            </a></li>
            <li><a
                href="#contact"
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'contact')}
            >
                Contact
            </a></li>
        </ul>
    </nav>
}

