const footerLink01 = document.getElementById("footerlink-01");
const footerLink02 = document.getElementById("footerlink-02");
const footerLink03 = document.getElementById("footerlink-03");
const sepFooter01 = document.getElementById("footersep-01");
const sepFooter02 = document.getElementById("footersep-02");


footerLink01.addEventListener("mouseenter", e => {
    console.log("yeah mouse is on me")
    sepFooter01.style.opacity = "1"   
})

footerLink01.addEventListener("mouseleave", e => {
    sepFooter01.style.opacity ="0.5"  
})


footerLink02.addEventListener("mouseenter", e => {
    console.log("yeah mouse is on me")
    sepFooter01.style.opacity = "1"   
    sepFooter02.style.opacity = "1"   
})

footerLink02.addEventListener("mouseleave", e => {
    sepFooter01.style.opacity ="0.5"  
    sepFooter02.style.opacity ="0.5"  
})


footerLink03.addEventListener("mouseenter", e => {
    console.log("yeah mouse is on me")
    sepFooter02.style.opacity = "1"   
})

footerLink03.addEventListener("mouseleave", e => {
    sepFooter02.style.opacity ="0.5"  
})