import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";


export default function Home() {
    
    // function scrollFunction() {
        const Button: HTMLElement | null = document.getElementById("homeButton");
        // if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        //     if (Button === null) throw new Error("Cannot find homeButton");
        //     Button.style.visibility = "visible";
        // } else {
        //     if (Button === null) throw new Error("Cannot find homeButton");
        //     Button.style.visibility = "hidden";
        // }
    // }
    // window.onscroll = function() {scrollFunction();};
    // window.onload = function() {scrollFunction();};

    return (
        <Link to="/main">
            <button  id="homeButton" title="Go to home">Home</button>
        </Link>
    );
}