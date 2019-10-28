"use strict";

//Variabler
let education = document.getElementById("educationbox");
let workxp = document.getElementById("workxpbox");
let websites = document.getElementById("websitebox")

//Händelsehanterare
window.addEventListener("load", getEducations, false);
window.addEventListener("load", getWorkXp, false);
window.addEventListener("load", getWebsites, false);

//Automatisk uppdatering copyright-text
let copyright = document.getElementById("copyright");
let d = new Date();
copyright.innerHTML = `Copyright ${d.getFullYear()} Emma Norgren`;

//Mobilmeny - fäll ned och upp
let navigation = document.getElementById("navigation");
let menuicon = document.getElementById("hamburger");
navigation.addEventListener("click", mobileMenu, false);

function mobileMenu() {
    if (navigation.className === "navdefault") {
        navigation.className = "menudown";
        menuicon.src = "pics/close.svg";
    } else {
        navigation.className = "navdefault";
        menuicon.src = "pics/hamburger.svg";
    }
}

//URL till webbtjänst
let url = "http://studenter.miun.se/~emno1501/dt173g/projekt/rest/cv.php"; //URL till webbtjänst
/* let url = "http://localhost/cv_rest/cv.php"; */

//Hämta utbildning
function getEducations() {
    fetch(url + "/education")
    .then((res) => res.json())
    .then((data) => {
        let output = "";
        
        data.forEach( function(ed) {
            output += `
            <article>
                <p>${ed.edStart} - ${ed.edStop}</p>
                <h3>${ed.edName}</h3>
                <p>${ed.edPlace}</p>
            </article>
            `
        })
        education.innerHTML += output;
    })
}

//Hämta arbetserfarenhet
function getWorkXp() {
    fetch(url + "/workexperience")
    .then((res) => res.json())
    .then((data) => {
        let output = "";
        
        data.forEach( function(work) {
            output += `
            <article>
                <p>${work.workStart} - ${work.workStop}</p>
                <h3>${work.workTitle}</h3>
                <p>${work.workPlace}</p>
            </article>
            `
        })
        workxp.innerHTML += output;
    })
}

//Hämta webbplatser
function getWebsites() {
    fetch(url + "/websites")
    .then((res) => res.json())
    .then((data) => {
        let output = "";
        
        data.forEach( function(web) {
            output += `
            <article>
                <h3>${web.websiteTitle}</h3>
                <p>${web.websiteDescription}</p>
                <a class="btn" href="${web.websiteLink}" target="_blank">Till webbplats</a>
                <p class="boxline"></p>
            </article>
            `
        })
        websites.innerHTML += output;
    })
}

