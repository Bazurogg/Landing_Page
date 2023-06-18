const footerLink01 = document.getElementById("footerlink-01");
const footerLink02 = document.getElementById("footerlink-02");
const footerLink03 = document.getElementById("footerlink-03");
const sepFooter01 = document.getElementById("footersep-01");
const sepFooter02 = document.getElementById("footersep-02");

// ----------------------------------------- Animation credits footer -------------------------------------------------]

footerLink01.addEventListener("mouseenter", e => {
    sepFooter01.style.opacity = "1"   
})

footerLink01.addEventListener("mouseleave", e => {
    sepFooter01.style.opacity ="0.5"  
})


footerLink02.addEventListener("mouseenter", e => {
    sepFooter01.style.opacity = "1"   
    sepFooter02.style.opacity = "1"   
})

footerLink02.addEventListener("mouseleave", e => {
    sepFooter01.style.opacity ="0.5"  
    sepFooter02.style.opacity ="0.5"  
})


footerLink03.addEventListener("mouseenter", e => {
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

function colors(z) {
    var a = getComputedStyle(z);
    var b = a.background;
    var c = a.backgroundColor;
    var swapColor = document.getElementsByClassName("swap-color");
    var swapPostItColor = document.getElementsByClassName("swapcolor-postit");
    var joinBtn = document.getElementsByClassName("join-now"); 

    document.getElementById("color-swap").style.background = b;
    document.getElementById("cardcolor-swap01").style.background = b;
    document.getElementById("cardcolor-swap02").style.background = b;
    document.getElementById("cardcolor-swap03").style.background = b;
    document.getElementById("subbutton").style.background = c;
    document.getElementById("learnmore-btn").style.background = c;

    for (var i = 0; i < swapColor.length; i++) {
        swapColor[i].style.color = c;
        swapColor[i].style.borderColor = c;    
    }
    
    for (var i = 0; i < swapPostItColor.length; i++) {
        swapPostItColor[i].style.background = c;
    }
  
    for (var i = 0; i < joinBtn.length; i++) {
        (function(index) {

            joinBtn[index].addEventListener("mouseover", function() {
                joinBtn[index].style.backgroundColor = c;
                joinBtn[index].style.color = "white";
            });

            joinBtn[index].addEventListener("mouseout", function() {
                joinBtn[index].style.backgroundColor = "";
                joinBtn[index].style.color = c;
              });

        })(i);
    }
}
// Reset Styles on Elements tag with class "reset-color".

function resetPageStyles() {
    var elementReset = document.getElementsByClassName("reset-color");
    var initialStyles = [];
  
    for (var i = 0; i < elementReset.length; i++) {
      initialStyles[i] = elementReset[i].style.cssText;
      elementReset[i].style.cssText = '';
    }
}
  
var button = document.getElementById("resetstyle-btn");
button.addEventListener('click', resetPageStyles);



// ----------------------------------------- Scroll top button -------------------------------------------------]

const scrollTopBtn = document.getElementById("totopbtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollTopBtn.style.visibility = "visible"
    } else {
        scrollTopBtn.style.visibility = "hidden"
    }
})
