//? Disclaimer: this code uses the 'Better Comments' extension
// Declared hour variables:
var nineAM = document.getElementById('hour-9');
var tenAM = document.getElementById('hour-10');
var elevenAM = document.getElementById('hour-11');
var twelvePM = document.getElementById('hour-12');
var onePM = document.getElementById('hour-13');
var twoPM = document.getElementById('hour-14');
var threePM = document.getElementById('hour-15');
var fourPM = document.getElementById('hour-16');
var fivePM = document.getElementById('hour-17');

var currentHour = dayjs().hour();

// Wrapping all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.
$(function () {
  // TODO: This code displays the current date in the header of the page using jQuery.
  var dateToday = dayjs().format('dddd, MMMM D, YYYY');
  $('#currentDay').text(dateToday); 
  
  // TODO: Code to apply the past, present, or future classes to each time.
  //// past
  //! present
  //* future

  // Conditional statement for 9am
  if (currentHour >= 9 && currentHour < 10) {
    console.log("The current hour is between 9am to 10am");
    nineAM.classList.add('present');
  } else if (currentHour < 10) {
    console.log("9am will be SOON!");
    nineAM.classList.add('future');
  } else {
    console.log("The current hour is past 9am");
  }

  // Conditional statement for 10am
  if (currentHour >= 10 && currentHour < 11) {
    console.log("The current hour is between 10am to 11am");
    tenAM.classList.add('present');
  } else if (currentHour < 10) {
    console.log("10am will be SOON!");
    tenAM.classList.add('future');
  } else {
    console.log("The current hour is past 10am");
  }

  // Conditional statement for 11am
  if (currentHour >= 11 && currentHour < 12) {
    console.log("The current hour is between 11am to 12pm");
    elevenAM.classList.add('present');
  } else if (currentHour < 11){
    console.log("11am will be SOON!");
    elevenAM.classList.add('future');
  } else {
    console.log("The current hour is past 11pm");
  }

  // Conditional statement for 12pm
  if (currentHour >= 12 && currentHour < 13) {
    console.log("The current hour is between 12pm to 13pm");
    twelvePM.classList.add('present');
  } else if (currentHour < 12){
    console.log("12pm will be SOON!");
    twelvePM.classList.add('future');
  } else {
    console.log("The current hour is past 12pm");
  } 

  // Conditional statement for 13pm
  if (currentHour >= 13 && currentHour < 14) {
    console.log("The current hour is between 13pm to 14pm");
    onePM.classList.add('present');
  } else if (currentHour < 13){
    console.log("13pm will be SOON!");
    onePM.classList.add('future');
  } else {
    console.log("The current hour is past 13pm");
  } 

  // Conditional statement for 14pm
  if (currentHour >= 14 && currentHour < 15) {
    console.log("The current hour is between 14pm to 15pm");
    twoPM.classList.add('present');
  } else if (currentHour < 14){
    console.log("14pm will be SOON!");
    twoPM.classList.add('future');
  } else {
    console.log("The current hour is past 14pm");
  } 

  // Conditional statement for 15pm
  if (currentHour >= 15 && currentHour < 16) {
    console.log("The current hour is between 15pm to 16pm");
    threePM.classList.add('present');
  } else if (currentHour < 15){
    console.log("15pm will be SOON!");
    threePM.classList.add('future');
  } else {
    console.log("The current hour is past 15pm");
  } 

  // Conditional statement for 16pm
  if (currentHour >= 16 && currentHour < 17) {
    console.log("The current hour is between 16pm to 17pm");
    fourPM.classList.add('present');
  } else if (currentHour < 16){
    console.log("16pm will be SOON!");
    fourPM.classList.add('future');
  } else {
    console.log("The current hour is past 16pm");
  } 

  // Conditional statement for 17pm
  if (currentHour >= 17 && currentHour < 18) {
    console.log("The current hour is between 17pm to 18pm");
    fivePM.classList.add('present');
  } else if (currentHour < 17){
    console.log("17pm will be SOON!");
    fivePM.classList.add('future');
  } else {
    console.log("The current hour is past 17pm");
  } 

  // TODO: Event listener for click events on the save buttons. 
  var saveBtn9 = document.querySelector('#btn9');
  var saveBtn10 = document.querySelector('#btn10');
  var saveBtn11 = document.querySelector('#btn11');
  var saveBtn12 = document.querySelector('#btn12');
  var saveBtn13 = document.querySelector('#btn13');
  var saveBtn14 = document.querySelector('#btn14');
  var saveBtn15 = document.querySelector('#btn15');
  var saveBtn16 = document.querySelector('#btn16');
  var saveBtn17 = document.querySelector('#btn17');

  saveBtn9.addEventListener('click', saveToLS9);
  saveBtn10.addEventListener('click', saveToLS10);
  saveBtn11.addEventListener('click', saveToLS11);
  saveBtn12.addEventListener('click', saveToLS12);
  saveBtn13.addEventListener('click', saveToLS13);
  saveBtn14.addEventListener('click', saveToLS14);
  saveBtn15.addEventListener('click', saveToLS15);
  saveBtn16.addEventListener('click', saveToLS16);
  saveBtn17.addEventListener('click', saveToLS17);

  // This code checks if there is any saved text in localStorage when the page loads
  window.addEventListener('load', function() {
  var savedText9= localStorage.getItem('savedText9');
  var savedText10= localStorage.getItem('savedText10');
  var savedText11= localStorage.getItem('savedText11');
  var savedText12= localStorage.getItem('savedText12');
  var savedText13= localStorage.getItem('savedText13');
  var savedText14= localStorage.getItem('savedText14');
  var savedText15= localStorage.getItem('savedText15');
  var savedText16= localStorage.getItem('savedText16');
  var savedText17= localStorage.getItem('savedText17');
  if (savedText9) {
    var data = JSON.parse(savedText9);
    nineAM.value = data.text;
  }
  if (savedText10) {
    var data = JSON.parse(savedText10);
    tenAM.value = data.text;
  }
  if (savedText11) {
    var data = JSON.parse(savedText11);
    elevenAM.value = data.text;
  }
  if (savedText12) {
    var data = JSON.parse(savedText12);
    twelvePM.value = data.text;
  }
  if (savedText13) {
    var data = JSON.parse(savedText13);
    onePM.value = data.text;
  }
  if (savedText14) {
    var data = JSON.parse(savedText14);
    twoPM.value = data.text;
  }
  if (savedText15) {
    var data = JSON.parse(savedText15);
    threePM.value = data.text;
  }
  if (savedText16) {
    var data = JSON.parse(savedText16);
    fourPM.value = data.text;
  }
  if (savedText17) {
    var data = JSON.parse(savedText17);
    fivePM.value = data.text;
  }
  });

  // TODO: Add code to get any user input that was saved in localStorage and populate the textarea of each hour.
  function saveToLS9() {
    var inputText9 = nineAM.value;
    var data = {
      text: inputText9
    };
    var dataString = JSON.stringify(data);
    localStorage.setItem('savedText9', dataString);
    console.log(localStorage);
    displayText();
  }

  function saveToLS10() {
    var inputText10 = tenAM.value;
    var data = {
      text: inputText10
    };
    var dataString = JSON.stringify(data);
    localStorage.setItem('savedText10', dataString);
    console.log(localStorage);
    displayText();
  }

  function saveToLS11() {
    var inputText11 = elevenAM.value;
    var data = {
      text: inputText11
    };
    var dataString = JSON.stringify(data);
    localStorage.setItem('savedText11', dataString);
    console.log(localStorage);
    displayText();
  }

  function saveToLS12() {
    var inputText12 = twelvePM.value;
    var data = {
      text: inputText12
    };
    var dataString = JSON.stringify(data);
    localStorage.setItem('savedText12', dataString);
    console.log(localStorage);
    displayText();
  }

  function saveToLS13() {
    var inputText13 = onePM.value;
    var data = {
      text: inputText13
    };
    var dataString = JSON.stringify(data);
    localStorage.setItem('savedText13', dataString);
    console.log(localStorage);
    displayText();
  }

  function saveToLS14() {
    var inputText14 = twoPM.value;
    var data = {
      text: inputText14
    };
    var dataString = JSON.stringify(data);
    localStorage.setItem('savedText14', dataString);
    console.log(localStorage);
    displayText();
  }

  function saveToLS15() {
    var inputText15 = threePM.value;
    var data = {
      text: inputText15
    };
    var dataString = JSON.stringify(data);
    localStorage.setItem('savedText15', dataString);
    console.log(localStorage);
    displayText();
  }

  function saveToLS16() {
    var inputText16 = fourPM.value;
    var data = {
      text: inputText16
    };
    var dataString = JSON.stringify(data);
    localStorage.setItem('savedText16', dataString);
    console.log(localStorage);
    displayText();
  }

  function saveToLS17() {
    var inputText17 = fivePM.value;
    var data = {
      text: inputText17
    };
    var dataString = JSON.stringify(data);
    localStorage.setItem('savedText17', dataString);
    console.log(localStorage);
    displayText();
  }

  //Code to display a saved message in the header
  var LSAddedText = document.querySelector('.hide');

    function displayText (){
      LSAddedText.classList.remove('hide');
    }
});
