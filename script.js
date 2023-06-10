const footerLink01 = document.getElementById("footerlink-01");
const sepFooter01 = document.getElementById("footersep-01");


footerLink01.addEventListener("mouseenter", e => {
    console.log("hey listen !")
    sepFooter01.style.opacity = "1"   
})


footerLink01.addEventListener("mouseleave", e => {
    console.log("You go")
    sepFooter01.style.opacity ="0.5"  
})