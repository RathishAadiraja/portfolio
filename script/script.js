const aboutBtn = document.getElementById("about-link");
const aboutSection = document.getElementById("about");

aboutBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    aboutSection.scrollIntoView();
});


const projectBtn = document.getElementById("projects-link");
const projectSection = document.getElementById("projects");

projectBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    projectSection.scrollIntoView();
});


const contactBtn = document.getElementById("contact-link");
const contactSection = document.getElementById("contact");

contactBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    contactSection.scrollIntoView();
});

const githubBtn = document.getElementById("github-btn");

githubBtn.addEventListener("click", ()=>{
    window.open("https://github.com/RathishAadiraja");
});


const linkedinBtn = document.getElementById("linkedin-btn");

linkedinBtn.addEventListener("click", ()=>{
    window.open("https://www.linkedin.com/in/rathish-aadiraja-madhana-gopalapuram-ramesh/");
});

const tasksToDo = document.getElementById("tasksToDo")

tasksToDo.addEventListener("click", ()=>{
    window.open("https://tasks-todo-application.herokuapp.com/");
})

const pimalityTest = document.getElementById("primalityTest")

primalityTest.addEventListener("click", ()=>{
    window.open("https://primality-test.herokuapp.com/");
})


