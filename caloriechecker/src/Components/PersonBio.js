import React from "react";
import '../css/PersonBio.css'
import People from '../Data/AboutUs.json'

const team = People


function Person(props) {
    const { image_src, name, bio, linkedin, github } = props;
  
    return (
      <div className="container">
        <div className="profileImg">
          <img className="image" src={image_src} alt="profile picture" />
        </div>
        <div className="profileTxt">
          <h3>{name}</h3>
          <p className="bio">{bio}</p>
          <a href={linkedin}><img src="../images/linkedin-icon.png" alt="LinkedIn" /></a>
          <a href={github}><img src="../images/github-mark.png" alt="GitHub" /></a>
        </div>
      </div>
    );
}
  
function Team() {
    return (
        <div>
        {team.map((member) => (
            <Person
            key={member.name}
            image_src={member.image_src}
            name={member.name}
            bio={member.bio}
            linkedin={member.linkedin}
            github={member.github}
            />
        ))}
        </div>
    );
}
  
  export default Team;