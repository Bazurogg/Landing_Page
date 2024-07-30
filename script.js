const footerLink01 = document.getElementById("footerlink-01");
const footerLink02 = document.getElementById("footerlink-02");
const footerLink03 = document.getElementById("footerlink-03");
const sepFooter01 = document.getElementById("footersep-01");
const sepFooter02 = document.getElementById("footersep-02");

var target = document.querySelector(".footer");
var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

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



// ----------------------------------------- Scroll top button (NEW VERSION) -------------------------------------------------]


// We want to create a function that will be called when that element is intersected
function callback(entries, observer) {

    // The callback will return an array of entries, even if you are only observing a single item
    entries.forEach((entry) => {
  
      if (entry.isIntersecting) {
  
        // Show button
        scrollToTopBtn.classList.add("showBtn");
  
      } else {
  
        // Hide button
        scrollToTopBtn.classList.remove("showBtn");
  
      }
  
    });

}
  
// Fonction pour le retour de haut de page.

document.addEventListener('DOMContentLoaded', function() {

    function scrollToTop() {
        console.log("Scrolling to top...");
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    scrollToTopBtn.addEventListener('click', function() {
        console.log("Button clicked");
        scrollToTop();
    });

});

let observer = new IntersectionObserver(callback);

observer.observe(target);
  
// ----------------------------------------- Scroll top button (NEW VERSION) -------------------------------------------------]


// ----------------------------------------- Scroll top button (OLD VERSION) -------------------------------------------------]



// const scrollTopBtn = document.getElementById('scroll-top-btn');

// window.addEventListener('scroll', () => {
//   if (window.scrollY > window.innerHeight) {
//     scrollTopBtn.style.display = 'block';
//   } else {
//     scrollTopBtn.style.display = 'none';
//   }
// });

// scrollTopBtn.addEventListener('click', () => {
//     console.log("hello")
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
    
//   });
// });

// const scrollTopBtn = document.getElementById("totopbtn");

// window.addEventListener("scroll", () => {
//     if (window.scrollY > 200

//     ) {
//         scrollTopBtn.style.visibility = "visible"
//     } else {
//         scrollTopBtn.style.visibility = "hidden"
//     }
// })

// // Get the button
// let mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     console.log("Hello")
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;

// }

// ----------------------------------------- Scroll top button (OLD VERSION) -------------------------------------------------]


// ----------------------------------------- Social Links Bar -------------------------------------------------]

let linkBar = document.getElementById("iconectnr");
let socialBtn = document.getElementById("socialwrap");
let socialIcon =document.getElementById("social-icon");

function toggleLink() {
    linkBar.classList.toggle("active");
    socialBtn.classList.toggle("active");
    socialIcon.classList.toggle("active");
}

// ----------------------------------------- Nav Bar -------------------------------------------------]


// // Défilement fluide vers les sections appropriées.
document.addEventListener('DOMContentLoaded', function () {
    // Sélectionner tous les liens dans la barre de navigation
    const navLinks = document.querySelectorAll('#navbar-box a');
  
    // Ajouter un écouteur d'événement pour chaque lien
    navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault(); // Empêcher le comportement par défaut du lien
  
        // Obtenir la section cible par son ID
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
  
        // Défilement fluide vers la section cible
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      });
    });
  });

let navBar = document.getElementById("navbar-box");


function toggleNav() {

    navBar.classList.toggle("active");

}
