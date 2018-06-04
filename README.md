# React news SPA - powered by News API

This is a SPA to display current news based on a user's query, top stories, or other parameters which will be listed below. Currently don't have a direction with this app because this is mainly to keep busy.

## To run the project

In order to run the development build of the project, you will need to do a few things.

Open an account with News Api (I want to keep my api key private and their service is free. Sign up takes only a matter of seconds.). In order to avoid errors, you can copy the path I have or change the pathing for your instance. 

The current path is: src/config/config.js with a const apiKey = YOUR_API_KEY_HERE.

Run the command ``` npm install ```.

Run the command ``` npm start ``` - this will serve the application on localhost:3000 (by default) in your default browser. 

## Dependencies
<ul>
<li>React</li>
<li>React Router Dom</li>
<li>Gulp</li>
<li>News API</li>
</ul>

## Possible Queries

Custom Search - allows a user to search for whatever stories they want to find.

Top News - shows top 20 articles in the US.

## Status
Not really sure what else I should do with this project. Mostly a proof of concept to keep busy and it does what is intended. Finds top headlines, allows user to query w/ or w/out categories, results and current page persist through page reload, don't know what else I could do with this that would be worth while.

Dev started today - 5/31/2018.

<ul>
<li><del>Need to redesign landing page to have options for different types of searches</del></li>
<li>Got the query page working properly. Has pagination, remembers pg through reload, scrolls back to top on button press, allows paramters and works with pagination.</li>
<li><del>Need to build page template for top headlines / allow other searches</del></li>
<li>Need to start building the rest of the SPA. Currently only has a search for everthing.</li>
<li>Added top news page to show 20 recent stories in US. Will work on adding ability to query top headlines based on query and category.</li>
</ul>