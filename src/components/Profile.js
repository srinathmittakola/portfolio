import React from 'react'
import profile from '../assets/profile.jpg';
import icon1 from '../assets/c.png'
import icon2 from '../assets/cpp.png'
import icon3 from '../assets/html.png'
import icon4 from '../assets/css.png'
import icon5 from '../assets/java.png'
import icon6 from '../assets/Kotlin.png'
import icon7 from '../assets/react.png'
import icon8 from '../assets/java-script.png'
import icon9 from '../assets/python.png'
import icon10 from '../assets/sql-server.png'

export default function Profile() {

    const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10];

    return (
        <>
            <section id="profile" className="hero">

                <div className="hero-content">
                    <img src={profile} alt="Profile" className="profile-pic" />
                    <h2>Hello, I'm Srinath Mittakola</h2>
                    <p>Android Developer | Frontend Designer | Freelancer</p>
                    <a href="#projects" className="btn" >
                        View My Work
                    </a>
                </div>

            </section>

            <div className="icon-carousel">
                <div className="icon-track">
                    {icons.concat(icons).map((icon, i) => (
                        <div className="icon-wrapper" key={i}>
                            <img src={icon} alt={`icon-${i}`} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
