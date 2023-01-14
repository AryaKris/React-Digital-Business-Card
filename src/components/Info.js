import React from "react"

export default function Info() {
    return (
        <div>
            <img className="profile-photo" src="./images/profilepic.png" />
            <h1 className="person-name">Arya Krishna</h1>
            <h3 className="profession">Junior Front-End Developer</h3>
            <h4 className="tagline">Front End Developer turning passion to results</h4>
            <div className="websites">
                <a href="mailto:dr.aryakris@outlook.com" target="_blank" className="email">
                    <img src="../images/email-logo.png" />
                    <p>Email</p>
                </a>
                <a href="https://www.linkedin.com/in/arya-krishna/" target="_blank" className="linkedin" >
                    <img src="../images/linkedin-logo.png" />
                    <p>Linkedin</p>
                </a>
            </div>
        </div>
    )
}
