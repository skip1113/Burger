# Burger
## Link to deployed Github: https://github.com/skip1113/burger
## Link to deployed Heroku: https://hidden-chamber-83537.herokuapp.com/

## Description
This is a restaurant app, burger logger with MySQL, Node, Express, Handlebars and homemade ORM.
Lets users input the names of any kind of burgers they'd like to eat.
The Burger the user inputs will display on the left side of the page in the waiting area. Each burger will have a "Devour It!" button waiting to be devoured. When the user clicks is, the burger will move to the right side of the page.

## Instructions
Click the link deployed to Heroku ready to have a burger input into the form.
* Add burgers, Devour it!, Delete it!
### To Run Locally
* Clone this repository from Github.
* Find this file in your favorite code software.
* Type npm install in your terminal for the node packages used in this app.
* Set your port of choice on the server.js file.
* Create the database in Schema.sql.
    * Dont forget your password while trying to connect to Mysql on the connection.js file.
* Run node server.js in your terminal.
* Open your browser and search "http:/localhost:"PORT#"/

### Organization:
* Started with folders config holding the connection to Mysql, and orm.js with orm functions for Mysql tables.
* Controller folder containing Express, and routes.
* Database folder for SQL queries.
* Models that will call ORM functions using burger specific input for the ORM.
* Views/Layouts files to have the template that Handlebars can render onto.
* Server.js to start our server so that it can begin listening to client requests.

## Technologies Used:
* Javascript
* Jquery
* Handlebars
    * HTML
* Node.js
* Mysql
* ORM
* Node packages/Dependencies:
    * Express
    * Mysql
    * Express-handlebars
    
