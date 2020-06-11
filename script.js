// Global variables
var nineAmInput = document.getElementById("nine-am");
var tenAmInput = document.getElementById("ten-am");
var elevenAmInput = document.getElementById("eleven-am");
var twelvePmInput = document.getElementById("twelve-pm");
var onePmInput = document.getElementById("one-pm");
var twoPmInput = document.getElementById("two-pm");
var threePmInput = document.getElementById("three-pm");
var fourPmInput = document.getElementById("four-pm");
var fivePmInput = document.getElementById("five-pm");
var nineAmButton = document.getElementById("nine-am-btn");
var tenAmButton = document.getElementById("ten-am-btn");
var elevenAmButton = document.getElementById("eleven-am-btn");
var twelvePmButton = document.getElementById("twelve-pm-btn");
var onePmButton = document.getElementById("one-pm-btn");
var twoPmButton = document.getElementById("two-pm-btn");
var threePmButton = document.getElementById("three-pm-btn");
var fourPmButton = document.getElementById("four-pm-btn");
var fivePmButton = document.getElementById("five-pm-btn");
var clearButton = document.getElementById("clear-btn");
// nine-am input field
nineAmButton.addEventListener("click", function () {
  localStorage.setItem("input-nine", nineAmInput.value);

  addInput();
});

function addInput() {
  if (localStorage.getItem("input-nine")) {
    let inputNine = localStorage.getItem("input-nine");
    nineAmInput.placeholder = inputNine;
    nineAmInput.value = "";
  } else {
    return;
  }
}

// ten-am input field

tenAmButton.addEventListener("click", function () {
  localStorage.setItem("input-ten", tenAmInput.value);

  addInputTen();
});

function addInputTen() {
  if (localStorage.getItem("input-ten") || localStorage.getItem("input-nine")) {
    let inputTen = localStorage.getItem("input-ten");
    tenAmInput.placeholder = inputTen;
    tenAmInput.value = "";
  } else {
    return;
  }
}

// eleven-am input field
elevenAmButton.addEventListener("click", function () {
  localStorage.setItem("input-eleven", elevenAmInput.value);

  addInputEleven();
});

function addInputEleven() {
  if (localStorage.getItem("input-eleven")) {
    let inputeleven = localStorage.getItem("input-eleven");
    elevenAmInput.placeholder = inputeleven;
    elevenAmInput.value = "";
  } else {
    return;
  }
}

// twelve-pm input field
twelvePmButton.addEventListener("click", function () {
  localStorage.setItem("input-twelve", twelvePmInput.value);

  addInputTwelve();
});

function addInputTwelve() {
  if (localStorage.getItem("input-twelve")) {
    let inputTwelve = localStorage.getItem("input-twelve");
    twelvePmInput.placeholder = inputTwelve;
    twelvePmInput.value = "";
  } else {
    return;
  }
}

// one-pm input field
onePmButton.addEventListener("click", function () {
  localStorage.setItem("input-one", onePmInput.value);

  addInputOne();
});

function addInputOne() {
  if (localStorage.getItem("input-one")) {
    let inputone = localStorage.getItem("input-one");
    onePmInput.placeholder = inputone;
    onePmInput.value = "";
  } else {
    return;
  }
}

// two-pm input field
twoPmButton.addEventListener("click", function () {
  localStorage.setItem("input-two", twoPmInput.value);

  addInputTwo();
});

function addInputTwo() {
  if (localStorage.getItem("input-two")) {
    let inputtwo = localStorage.getItem("input-two");
    twoPmInput.placeholder = inputtwo;
    twoPmInput.value = "";
  } else {
    return;
  }
}

// three-pm input field
threePmButton.addEventListener("click", function () {
  localStorage.setItem("input-three", threePmInput.value);

  addInputThree();
});

function addInputThree() {
  if (localStorage.getItem("input-three")) {
    let inputthree = localStorage.getItem("input-three");
    threePmInput.placeholder = inputthree;
    threePmInput.value = "";
  } else {
    return;
  }
}

// four-pm input field
fourPmButton.addEventListener("click", function () {
  localStorage.setItem("input-four", fourPmInput.value);

  addInputFour();
});

function addInputFour() {
  if (localStorage.getItem("input-four")) {
    let inputfour = localStorage.getItem("input-four");
    fourPmInput.placeholder = inputfour;
    fourPmInput.value = "";
  } else {
    return;
  }
}

// five-pm input field
fivePmButton.addEventListener("click", function () {
  localStorage.setItem("input-five", fivePmInput.value);

  addInputFive();
});

function addInputFive() {
  if (localStorage.getItem("input-five")) {
    let inputfive = localStorage.getItem("input-five");
    fivePmInput.placeholder = inputfive;
    fivePmInput.value = "";
  } else {
    return;
  }
}
// displays local storage in input field placeholders on reload
function loadFunction() {
  let inputNine = localStorage.getItem("input-nine");
  let inputTen = localStorage.getItem("input-ten");
  let inputEleven = localStorage.getItem("input-eleven");
  let inputTwelve = localStorage.getItem("input-twelve");
  let inputOne = localStorage.getItem("input-one");
  let inputTwo = localStorage.getItem("input-two");
  let inputThree = localStorage.getItem("input-three");
  let inputFour = localStorage.getItem("input-four");
  let inputfive = localStorage.getItem("input-five");
  nineAmInput.placeholder = inputNine;
  tenAmInput.placeholder = inputTen;
  elevenAmInput.placeholder = inputEleven;
  twelvePmInput.placeholder = inputTwelve;
  onePmInput.placeholder = inputOne;
  twoPmInput.placeholder = inputTwo;
  threePmInput.placeholder = inputThree;
  fourPmInput.placeholder = inputFour;
  fivePmInput.placeholder = inputfive;
  // displays "Enter event here" in textarea if local storage value is null
  if (inputNine === null) {
    nineAmInput.placeholder = "Enter event here";
    nineAmInput.value = "";
  }
  if (inputTen === null) {
    tenAmInput.placeholder = "Enter event here";
    tenAmInput.value = "";
  }
  if (inputEleven === null) {
    elevenAmInput.placeholder = "Enter event here";
    elevenAmInput.value = "";
  }
  if (inputTwelve === null) {
    twelvePmInput.placeholder = "Enter event here";
    twelvePmInput.value = "";
  }
  if (inputOne === null) {
    onePmInput.placeholder = "Enter event here";
    onePmInput.value = "";
  }
  if (inputTwo === null) {
    twoPmInput.placeholder = "Enter event here";
    twoPmInput.value = "";
  }
  if (inputThree === null) {
    threePmInput.placeholder = "Enter event here";
    threePmInput.value = "";
  }
  if (inputFour === null) {
    fourPmInput.placeholder = "Enter event here";
    fourPmInput.value = "";
  }
  if (inputfive === null) {
    fivePmInput.placeholder = "Enter event here";
    fivePmInput.value = "";
  }
}
// clears all local storage.  function is called by the clear-btn
function deleteItems() {
  localStorage.clear();
  nineAmInput.placeholder = "Enter event here";
  tenAmInput.placeholder = "Enter event here";
  elevenAmInput.placeholder = "Enter event here";
  twelvePmInput.placeholder = "Enter event here";
  onePmInput.placeholder = "Enter event here";
  twoPmInput.placeholder = "Enter event here";
  threePmInput.placeholder = "Enter event here";
  fourPmInput.placeholder = "Enter event here";
  fivePmInput.placeholder = "Enter event here";
  loadFunction();
}
// call the loadFunction when page is reloaded
document.body.onload = loadFunction;
