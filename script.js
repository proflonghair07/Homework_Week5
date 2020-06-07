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

// nine-am input field
nineAmButton.addEventListener("click", function () {
  localStorage.setItem("input-nine", nineAmInput.value);

  addInput();
});

function addInput() {
  if (localStorage.getItem("input-nine")) {
    let inputNine = localStorage.getItem("input-nine");
    nineAmInput.placeholder = inputNine;
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
  } else {
    return;
  }
}

document.body.onload = addInputFive;
