import React from "react";
import "./Top.css";
import { mainTop, subTop } from  '../../portfolio';

interface Props {
    from : string,
}
export default function Top({ from }: Props) {
    function TopEvent() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    
    function scrollFunction() {
        const Button: HTMLElement | null = document.getElementById("topButton");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            if (Button === null) throw new Error("Cannot find topButton");
            Button.style.visibility = "visible";
        } else {
            if (Button === null) throw new Error("Cannot find topButton");
            Button.style.visibility = "hidden";
        }
    }
    function scrollFunction2() {
        const Button: HTMLElement | null = document.getElementById("topButton-subPage");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            if (Button === null) throw new Error("Cannot find topButton2");
            Button.style.visibility = "visible";
        } else {
            if (Button === null) throw new Error("Cannot find topButton2");
            Button.style.visibility = "hidden";
        }
    }
    if( 'sub'.localeCompare({from}.from)){
        window.onscroll = function() {scrollFunction();};
        window.onload = function() {scrollFunction();};    
    }else{
        window.onscroll = function() {scrollFunction2();};
        window.onload = function() {scrollFunction2();};
    }
    if( 'sub'.localeCompare({from}.from)){
        return (
            <button onClick={TopEvent} id="topButton" title="Go to top">TOP</button>
        ); 
    }else{
        return (
            <button onClick={TopEvent} id="topButton-subPage" title="Go to top">TOP</button>
        );
        
    }
    // return(<button onClick={TopEvent} id="topButton-subPage" title="Go to top">TOP</button>);
    
}
