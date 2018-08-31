# Get Up and Running

- front end: run npm client
- back end: run npm server


# YPI HTML and Express



the Questionnaire folder contains the HTML page where the user would answer the questions. The format of the page
follows the rootPage's format, which is the login page.

The rootPage is the HTML page, taking the username and password.

the app.js is the express server for the root page. I did not connect it to the root page as I was not sure how
it would change the process of reactifying everything. (To connect it to the rootPage go to app.js in ypi)


# YPI Data models

In the models folder we have the three different models for the project. The user and answers model contain the password salting code, but it's not tested yet, so there is a slight chance that the code needs a modification. For now we are trying to test to see if the data in the models are being saved. Still struggle with that code for now. The connection.js file just contains the code that connects mongodb to mongoose and returns a text to show if it's connected or not. The saving_test.js file is the file for saving sample data to the data base, but it's not working in the command line when using the command npm run testing, it's giving the error <embedded>:104995 Unable to locate git workspace root for. For now we are working on this issue.


