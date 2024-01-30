# Work Day Scheduler

## Description

This webpage intends to give users a calendar to save events for each hour of a typical working day (9am–5pm). This app also features dynamically updated HTML and CSS powered by jQuery and Bootstrap.

[Click here to view the live webpage!](https://marcusmr15.github.io/work-day-scheduler/)

## Installation

N/A

## Usage

This webpage displays the title app’s title: ‘Work Day Scheduler’ with a brief description of its purpose. Underneath the description, the current date on which the user opens the application is displayed in the following format: day, month and number, year.

![Screenshot of the date updated automatically by jQuery so every user can see the current date](/assets/images/jquery-currentdate.png)

Below the header elements, 9 text boxes with a save button each are displayed with color references:

* A gray text box means the hour has already passed.
* A red text box means the hour is the current hour.
* A green text box means the hour has not yet arrived, which indicates the future.

These boxes also represent the hours of a typical working day. Additionally, typing an event will save the event to the `local storage`.

![Screenshot of the general overview of the webpage: “Work Day Scheduler”](/assets/images/webpage-preview-calendar.png)

__*Note__: Reloading/refreshing the page will `not` delete the events entered, but the beginning of a new day __will do so__.

## Credits

This webpage was created with the help of:
* The starter code from the repo “crispy-octo-meme” by [Xander Rapstine](https://github.com/Xandromus).
* The ‘Xpert Learning Assistant’ Artificial Intelligence by edX.

## License

This repository does not have a specific license.

