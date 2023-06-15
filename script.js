const footerLink01 = document.getElementById("footerlink-01");
const footerLink02 = document.getElementById("footerlink-02");
const footerLink03 = document.getElementById("footerlink-03");
const sepFooter01 = document.getElementById("footersep-01");
const sepFooter02 = document.getElementById("footersep-02");

// ----------------------------------------- Animation crédits footer -------------------------------------------------]

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

// ----------------------------------------- Color Picker -------------------------------------------------]

let subMenu = document.getElementById("submenu");
let gearMenu = document.getElementById("gearicone");
let gearWrap = document.getElementById("gearwrap");
let colorPicker = document.getElementById("colorpicker");
function toggleMenu() {

    subMenu.classList.toggle("active");
    gearMenu.classList.toggle("active");
    gearWrap.classList.toggle("active");
    colorPicker.classList.toggle("active");
}

function color(z) {
    var a = getComputedStyle(z);
    var b = a.background;
    document.getElementById("color-swap").style.background = b;
    document.getElementById("cardcolor-swap01").style.background = b;
    document.getElementById("cardcolor-swap02").style.background = b;
    document.getElementById("cardcolor-swap03").style.background = b;
    document.getElementById("subbutton").style.background = b;

    console.log("hey !");
}