import React from "react"
import Head from "../components/header/Head"

const Contact = () => {
    return (
    <div className="backGroundCoffee">
        <Head />
        <div>
            <div className="containerContact">
                <div className="verticalRectangle">
                    
                </div>
                <div className="forumContainer">
                <form action="https://formsubmit.co/hey@hotmail.com" method="POST" className="forumStyle">
                <input type="text" name="name" className="myInput" placeholder="Enter Name" required="" />
                    <input className="myInput" type="email" name="email" placeholder="Email Address" required="" />
                    <input type="text" name="_subject" className="myInput" placeholder="Subject" required="" />
                    <input type="hidden" name="_captcha" value="false" />
                <textarea type="text" name="message" className="myInput lastChild" placeholder="Message" rows={8} required="" />

                <button className="submitbutton" type="submit">
                    <a href="/" className="submitbuttonTxt">Submit</a>
                </button>
                </form>
                </div>
                </div>
        </div>
        <div>
        </div>
    </div>
    )
}

export default Contact


