const mergword = [
  "class",
  "id",
  "href",
  "body",
  "head",
  "div",
  "headings",
  "horizontal rules",
  "element",
  "attribute",
  "link",
  "meta",
  "style",
  "script",
  "title",
  "comment",
  "style rule",
  "declaration block",
  "declaration",
  "property",
  "value",
  "selector",
  "padding",
  "margin",
  "font-family",
  "variables",
  "loops",
  "if-else statements",
  "strings",
  "dates",
  "DOM mode",
  "events",
];
// Web Dev Terminology

// Declare variables for storing points,random numbers, and changing the element in html
let point = 0;
let rand2 = Math.floor(Math.random() * mergword.length) + 0;
let inword = document.getElementById("wordgen");
let inwordcheck = document.querySelector(".container3");
let innumcheck = document.querySelector(".container4");
inword.innerHTML = mergword[rand2]; //choose a word via index from the mergword array

// These functions compares the random selected words to their right category. End on line 70

function jspressed(array1) {

  const elementinjs = [
    "variables",
    "loops",
    "if-else statements",
    "strings",
    "dates",
    "DOM mode",
    "events",
  ];
  let varcheck = elementinjs.includes(array1[rand2]);
  if (varcheck) {
    inwordcheck.innerHTML = `CORRECT 😊  Points: ${++point}`;
    inwordcheck.style.color = "#005b00";
    inwordcheck.style.fontWeight = "bold";
  } else {
    inwordcheck.innerHTML =  `WRONG 😭  Points: ${--point}`;
    inwordcheck.style.color = "#a00000";
    inwordcheck.style.fontWeight = "bold";

  }
}

function htmlpressed(array2) {

  const htmlwords = [
    "class",
    "id",
    "href",
    "body",
    "head",
    "div",
    "headings",
    "horizontal rules",
    "element",
    "attribute",
    "link",
    "meta",
    "style",
    "script",
    "title",
  ];
  let varcheck1 = htmlwords.includes(array2[rand2]);
  if (varcheck1) {
    inwordcheck.innerHTML = `CORRECT 😊  Points: ${++point}`;
    inwordcheck.style.color = "#005b00";
    inwordcheck.style.fontWeight = "bold";
   
  } else {
    inwordcheck.innerHTML = `WRONG 😭  Points: ${--point}`;
    inwordcheck.style.color = "#a00000";
    inwordcheck.style.fontWeight = "bold";
   
  }
}

function csspressed(array3) {
  
  const csswords = [
    "comment",
    "style rule",
    "declaration block",
    "declaration",
    "property",
    "value",
    "selector",
    "padding",
    "margin",
    "font-family",
  ];
  let varcheck1 = csswords.includes(array3[rand2]);
  if (varcheck1) {
    inwordcheck.innerHTML = `CORRECT 😊  Points: ${++point}`;
    inwordcheck.style.color = "#005b00";
    inwordcheck.style.fontWeight = "bold";
  } else {
    inwordcheck.innerHTML =  `WRONG 😭  Points: ${--point}`;
    inwordcheck.style.color = "#a00000";
    inwordcheck.style.fontWeight = "bold";
  }
}

//Ends

//When a button is press a function is call, then it randomly selects a new word

let jsbtn = document.querySelector(".jsbutton");
jsbtn.addEventListener("click", function () {
  jspressed(mergword);
  rand2 = Math.floor(Math.random() * mergword.length);
  inword.innerHTML = mergword[rand2];
  
});

let htmlbtn = document.querySelector(".htmlbutton");
htmlbtn.addEventListener("click", function () {
  htmlpressed(mergword);
  rand2 = Math.floor(Math.random() * mergword.length);
  inword.innerHTML = mergword[rand2];
  
});

let cssbtn = document.querySelector(".cssbutton");
cssbtn.addEventListener("click", function () {
  csspressed(mergword);
  rand2 = Math.floor(Math.random() * mergword.length);
  inword.innerHTML = mergword[rand2];
 
});

//Ends

// You have to click the gamepade icon to start the game
let playgamebtn = document.getElementById("playgamebtn");
let containers = document.querySelectorAll(
  ".container1, .container2, .container3"
);

containers.forEach(function (container) {
  container.style.visibility = "hidden";
});

playgamebtn.addEventListener("click", function () {
  containers.forEach(function (container) {
    if (container.style.visibility === "hidden") {
      container.style.visibility = "visible";
      playgamebtn.style.margin="0.4px";
      playgamebtn.style.height = '50.4px';
      playgamebtn.style.outline = "1px dashed white";

      

    } else {
      container.style.visibility = "hidden";
      playgamebtn.style.margin="";
      playgamebtn.style.height = '';
      playgamebtn.style.outline = "";
    }
  });
});

//ENDS
