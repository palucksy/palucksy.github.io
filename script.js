// =======================
// PALUCKSY WEBSITE
// =======================

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Fade in sections while scrolling
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }
    });
},{
    threshold:0.15
});

sections.forEach(section=>{
    section.style.opacity="0";
    section.style.transform="translateY(50px)";
    section.style.transition="all .8s ease";
    observer.observe(section);
});

// Profile hover effect
const profile=document.querySelector(".profile");

if(profile){

profile.addEventListener("mouseenter",()=>{

profile.style.transform="scale(1.05)";

profile.style.boxShadow="0 0 35px #8b5cf6";

});

profile.addEventListener("mouseleave",()=>{

profile.style.transform="scale(1)";

profile.style.boxShadow="0 0 25px rgba(139,92,246,.5)";

});

}

// Active navigation
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

console.log("Welcome to PALUCKSY 🚀");