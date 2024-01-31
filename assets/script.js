// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var nineAM = document.getElementById('hour-9');
var tenAM = document.getElementById('hour-10');
var elevenAM = document.getElementById('hour-11');
var twelvePM = document.getElementById('hour-12');
var onePM = document.getElementById('hour-13');
var twoPM = document.getElementById('hour-14');
var threePM = document.getElementById('hour-15');
var fourPM = document.getElementById('hour-16');
var fivePM = document.getElementById('hour-17');

var currentHour = dayjs().hour(); //? Get the current hour using Day.js

$(function () {
  var dateToday = dayjs().format('dddd, MMMM D, YYYY');
  $('#currentDay').text(dateToday); 
  //? This code is to display the current date in the format: weekday, month number, year. 

  //// past
  //! present
  //* future

  // Conditional statement for 9am
  if (currentHour >= 9 && currentHour < 10) {
    console.log("The current hour is between 9am to 10am");
    nineAM.classList.add('present');
  } else if (currentHour > 10) {
    console.log("The current hour is past 9am");
    nineAM.classList.add('past');
  } else if (currentHour < 9) {
    console.log("9am will be SOON!");
    nineAM.classList.add('future');
  }

  // Conditional statement for 10am
  if (currentHour >= 10 && currentHour < 11) {
    console.log("The current hour is between 10am to 11am");
    tenAM.classList.add('present');
  } else if (currentHour > 11) {
    console.log("The current hour is past 10am");
    tenAM.classList.add('past');
  } else if (currentHour < 10) {
    console.log("10am will be SOON!");
    tenAM.classList.add('future');
  }

  // Conditional statement for 11am
  if (currentHour >= 11 && currentHour < 12) {
    console.log("The current hour is between 11am to 12pm");
    elevenAM.classList.add('present');
  } else if (currentHour > 12) {
    console.log("The current hour is past 11pm");
    elevenAM.classList.add('past');
  } else if (currentHour < 11){
    console.log("11am will be SOON!");
    elevenAM.classList.add('future');
  }

  // Conditional statement for 12pm
  if (currentHour >= 12 && currentHour < 13) {
    console.log("The current hour is between 12pm to 13pm");
    twelvePM.classList.add('present');
  } else if (currentHour > 13) {
    console.log("The current hour is past 12pm");
    twelvePM.classList.add('past');
  } else if (currentHour < 12){
    console.log("12pm will be SOON!");
    twelvePM.classList.add('future');
  }

  // Conditional statement for 13pm
  if (currentHour >= 13 && currentHour < 14) {
    console.log("The current hour is between 13pm to 14pm");
    onePM.classList.add('present');
  } else if (currentHour > 14) {
    console.log("The current hour is past 13pm");
    onePM.classList.add('past');
  } else if (currentHour < 13){
    console.log("13pm will be SOON!");
    onePM.classList.add('future');
  }

  // Conditional statement for 14pm
  if (currentHour >= 14 && currentHour < 15) {
    console.log("The current hour is between 14pm to 15pm");
    twoPM.classList.add('present');
  } else if (currentHour > 15) {
    console.log("The current hour is past 14pm");
    twoPM.classList.add('past');
  } else if (currentHour < 14){
    console.log("14pm will be SOON!");
    twoPM.classList.add('future');
  }

  // Conditional statement for 15pm
  if (currentHour >= 15 && currentHour < 16) {
    console.log("The current hour is between 15pm to 16pm");
    threePM.classList.add('present');
  } else if (currentHour > 16) {
    console.log("The current hour is past 15pm");
    threePM.classList.add('past');
  } else if (currentHour < 15){
    console.log("15pm will be SOON!");
    threePM.classList.add('future');
  }

  // Conditional statement for 16pm
  if (currentHour >= 16 && currentHour < 17) {
    console.log("The current hour is between 16pm to 17pm");
    fourPM.classList.add('present');
  } else if (currentHour > 17) {
    console.log("The current hour is past 16pm");
    fourPM.classList.add('past');
  } else if (currentHour < 16){
    console.log("16pm will be SOON!");
    fourPM.classList.add('future');
  }

  // Conditional statement for 17pm
  if (currentHour >= 17 && currentHour < 18) {
    console.log("The current hour is between 17pm to 18pm");
    fivePM.classList.add('present');
  } else if (currentHour > 18) {
    console.log("The current hour is past 17pm");
    fivePM.classList.add('past');
  } else if (currentHour < 17){
    console.log("17pm will be SOON!");
    fivePM.classList.add('future');
  }

  /*var saveBtns = document.querySelectorAll('.btn');
  saveBtns.forEach(function(saveBtn) {
  saveBtn.addEventListener('click', saveToLS);
});

  function saveToLS () {
    var inputText = document.querySelectorAll('textarea').values;

    var data = {
      text: inputText
    };

    var dataString = JSON.stringify(data);

    localStorage.setItem('savedText', dataString);

    console.log(localStorage);
    displayText();
  }*/

  var LSAddedText = document.querySelector('.hide');

  function displayText (){
      LSAddedText.classList.remove('hide');
  }


  var saveBtns = document.querySelectorAll('.btn');
  var textarea = document.querySelector('textarea');

  saveBtns.forEach(function(saveBtn) {
  saveBtn.addEventListener('click', saveToLS);
  });

// Check if there is any saved text in localStorage when the page loads
  window.addEventListener('load', function() {
  var savedText = localStorage.getItem('savedText');
  if (savedText) {
    var data = JSON.parse(savedText);
    textarea.value = data.text;
  }
  });

  function saveToLS() {
    var inputText = textarea.value;
    var data = {
      text: inputText
    };
    var dataString = JSON.stringify(data);
    localStorage.setItem('savedText', dataString);
    console.log(localStorage);
    displayText();
  }


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
