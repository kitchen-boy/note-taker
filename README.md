# 11 Express.js: Note Taker
# Table of Contents:
* [Project Description](#description)
* [Task Completed](#task-completed)
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Installation](#installation-setup)
* [Tools Used](#tools-used)
* [Mock-Up](#mock-up)
* [Links](#links)
* [Credits](#credits)

# Description 
An application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

# Task Completed
To build the back end, connect the application's front end and back end, and then deploy the entire application to Heroku.

# User Story
```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

# Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```
# Installation Setup:
Copied following starter code to set up inital repo:
[the starter code](https://github.com/coding-boot-camp/miniature-eureka)

# Tools Used:
* [Express.js](https://www.npmjs.com/package/express): a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is considered the de facto standard server framework for Node.js.
* [Insomnia](https://insomnia.rest/): a powerful REST API client that allows us to test APIs and make client-side server requests without having to use a browser.
* [Heroku](https://www.heroku.com/): a cloud application platform that enables developers to build, run, and operate applications entirely in the cloud. Heroku allows you to deploy a server.js file that will run the Node.js process.
* [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli): To deploy apps easily without leaving the command line.

# Mock-Up

The following images show the web application's appearance and functionality: 

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./Assets/images/11-express-homework-demo-01.png)

![Note titled “Balance accounts” reads, “Balance account books by end of day Monday,” with other notes listed on the left.](./Assets/images/11-express-homework-demo-02.png)

## Getting Started

The application should have a `db.json` file on the back end, which will be used to store and retrieve notes using the `fs` module.

The following HTML routes should be created:

* `GET /notes` should return the `notes.html` file.

* `GET *` should return the `index.html` file.

The following API routes should be created:

* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into `npm` packages that could do this for you).

## Bonus

You haven’t learned how to handle DELETE requests, but this application has that functionality in the front end. As a bonus, see if you can add the DELETE route to the application using the following guideline:

* `DELETE /api/notes/:id` should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

# Links
* The URL of the functional, deployed application: 
https://kitchenote-taker.herokuapp.com

* The URL of the GitHub repository: 
https://github.com/kitchen-boy/note-taker

# CREDITS
Kaye Chen-Boyce

# References and tutorials utilized
* BCS Learning Assistant
* [How to use Express](https://expressjs.com/en/api.html#express)
* Instructor Scott Burman
* Tutor Alexis San Javier
* Testing