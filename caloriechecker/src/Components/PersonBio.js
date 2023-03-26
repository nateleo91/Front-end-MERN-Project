import React from "react";
import '../css/PersonBio.css'


export default function Person() {
    return (
        <div className="container">
            <div className="profileImg">
                 <img className="image" src="https://via.placeholder.com/150" alt="profile picture" />
            </div>
            <div className="profileTxt">
                <h3>Nate Leonard</h3>
                <p className="bio">
                    Just a dude from Pennsylvania who likes to code and eat Chocolate.  It is Palmer Chocolate Country up here you know!
                </p>
            </div>
        </div>
    )

}