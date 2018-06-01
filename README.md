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

Don't have a list yet. I will figure this out as I build it. The intention is to be open ended and allow the user to search freely or with pre-defined CTAs. Maybe both... who knows.

## Status

Dev started today - 5/31/2018.

<ul>
<li>Need to redesign landing page to have options for different types of searches</li>
<li>Got the query page working properly. Has pagination, remembers pg through reload, scrolls back to top on button press, allows paramters and works with pagination still.</li>
<li>Need to build page template for top headlines / allow other searches</li>
<li>Need to start building the rest of the SPA. Currently only has a search for everthing.</li>
</ul>