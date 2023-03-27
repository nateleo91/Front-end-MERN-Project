import React from "react";
import '../css/PersonBio.css'


export default function Person() {
    return (
        <div className="container">
            <div className="profileImg">
                 <img className="image" src="../images/Nate_uniform.jpeg" alt="profile picture" />
            </div>
            <div className="profileTxt">
                <h3>Nate Leonard</h3>
                <p className="bio">
                    Just a dude from Pennsylvania who likes to code and eat Chocolate.  It is Palmer Chocolate Country up here you know!
                </p>
                <a href="https://www.linkedin.com/in/nathen-leonard/"><img src="../images/linkedin-icon.png" /></a>
                <a href="https://github.com/nateleo91"><img src="../images/github-mark.png" /></a>
            </div>
        </div>
    )

}