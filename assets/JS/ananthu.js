let menuButton = document.querySelector("#hamburgurMenu");
let navLink = document.querySelectorAll(".navlink");
// document.querySelector("#toggleMenu").style.display = "none";
// document.querySelector("#toggleMenu").style.display = "block";
// for hamburgur menu to work
menuButton.addEventListener("click", () => {
  if (document.querySelector("#toggleMenu").style.display === "block") {
    document.querySelector("#toggleMenu").style.display = "none";
  } else {
    document.querySelector("#toggleMenu").style.display = "block";
  }
});

// so that when screen is resized to large navbar elements will be visible

window.addEventListener("resize", () => {
  var w = window.innerWidth;
  if (w > 1024) {
    document.querySelector("#toggleMenu").style.display = "block";
  } else {
    document.querySelector("#toggleMenu").style.display = "none";
  }
});

//for navbar to collapse after clicking link
for (let i = 0; i < 3; i++) {
  navLink[i].addEventListener("click", () => {
    var w = window.innerWidth;
    if (w < 1024) {
      document.querySelector("#toggleMenu").style.display = "none";
    }
  });
}
