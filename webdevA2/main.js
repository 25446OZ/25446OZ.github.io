//target all elements to save to constants
const home = document.querySelector("#home");
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
const page4btn = document.querySelector("#page4btn");
const page5btn = document.querySelector("#page5btn");
var allpages = document.querySelectorAll(".page");

//select all subtopic pages
function hideall() { //function to hide all pages
  for (let onepage of allpages) { //go through all subtopic pages
    onepage.style.display = "none"; //hide it
  }
}

function show(pgno) { //function to show selected page no
  hideall();
  //select the page based on the parameter passed in
  let onepage = document.querySelector("#page" + pgno);
  onepage.style.display = "flex"; //show the page
}

home.addEventListener('click', function () {
  hideall();
})

/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
  show(1);
});
page2btn.addEventListener("click", function () {
  show(2);
});
page3btn.addEventListener("click", function () {
  show(3);
});
page4btn.addEventListener("click", function () {
  show(4);
});
page5btn.addEventListener("click", function () {
  show(5);
});
hideall();

const hamBtn = document.querySelector("#dropdown");
const menuItemsList = document.querySelector("nav ul");

hamBtn.addEventListener("click", toggleMenus);

function toggleMenus() { /*open and close menu*/
  //if menuItemsList dont have the class "menuShow", add it, else remove it
  menuItemsList.classList.toggle("menuShow");
  //if menu is showing (has the class “menuShow”)
  if (menuItemsList.classList.contains("menuShow")) {
    hamBtn.innerHTML = "Close Menu"; //change button text to chose menu
  } else { //if menu NOT showing
    hamBtn.innerHTML = "Open Menu"; //change button text open menu
  }
}

// Cup selecter
const cups = document.querySelectorAll(".cup");

// drag cup toggle and position
let draggedCup = null;
let offsetX = 0;
let offsetY = 0;

// Sound
const cupsound = new Audio("audio/cup-sound.mp4");

cups.forEach(cup => {
  // Allow to move the cup on PC
  cup.addEventListener("mousedown", (e) => {
    draggedCup = cup;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
  });

  // Allow to move the cup on phone
  cup.addEventListener("touchstart", (e) => {
    draggedCup = cup;
    const touch = e.touches[0];
    const rect = cup.getBoundingClientRect();
    offsetX = touch.clientX - rect.left;
    offsetY = touch.clientY - rect.top;
  });
});

// Moving the Images
document.addEventListener("mousemove", (e) => {
  if (draggedCup) {
    draggedCup.style.left = `${e.pageX - offsetX}px`;
    draggedCup.style.top = `${e.pageY - offsetY}px`;
  }
});

document.addEventListener("touchmove", (e) => {
  if (draggedCup) {
    e.preventDefault();
    const touch = e.touches[0];
    draggedCup.style.left = `${touch.clientX - offsetX}px`;
    draggedCup.style.top = `${touch.clientY - offsetY}px`;
  }
},  { passive: false });

// Putting down the images
document.addEventListener("mouseup", (e) => {
  if (draggedCup) {
    draggedCup = null;
    cupsound.play();
  }
});

document.addEventListener("touchend", (e) => {
  if (draggedCup) {
    draggedCup = null;
    cupsound.play();
  }
});

// Timer
let seconds = 0;
let timerInterval = null;
const stopwatchElement = document.getElementById("stopwatch");
const startBtn = document.getElementById("start");

startBtn.addEventListener("click", () => {
  if (timerInterval === null) {
    // Start the timer
    timerInterval = setInterval(() => {
      seconds++;
      stopwatchElement.textContent = seconds;
    }, 1000);
    startBtn.textContent = "Stop";
  } else {
    // Stop the timer
    clearInterval(timerInterval);
    timerInterval = null;
    startBtn.textContent = "Start";
  }
});


