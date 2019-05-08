# W 2 D 3: CRUD with Express

REPO for code: https://github.com/NimaBoscarino/crud-express-notes


Cool Links:

- [Using EJS with Express](https://github.com/mde/ejs/wiki/Using-EJS-with-Express)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Body Parser](https://www.npmjs.com/package/body-parser)
- [Pug (EJS alternative)](https://pugjs.org)

## REST Cheatsheet

### CRUD to HTTP

| Action    | HTTP verb/method | Example Routes
| --------- | ---------------- | --------------
|**C**reate | POST             | POST /dogs
|**R**ead   | GET              | GET /dogs, GET /dogs/:id, GET /owners/:ownerId/:dogs
|**U**pdate | PUT/PATCH        | PUT /dogs/:id
|**D**elete | DELETE           | DELETE /dogs/:id

**NOTE:** Browsers only support `GET` and `POST` actions from pure HTTP forms. To use `PUT`/`PATCH`/`DELETE` you'll either need to use client-side JS or the [`method-override`](http://expressjs.com/en/resources/middleware/method-override.html) middleware.

## Routes

- ways of interacting with the "back end"/server/data
- Generally made up of a VERB and a PATH

Verb: HTTP verbs, i.e. GET, POST, PUT, DELETE

PATH: Some URL, or part of a URL (e.g. /videos/:id)

Clients (or in our case cows) can make requests to a server using HTTP.

HTTP MEANS:

- Someone (CLIENT) makes a request
	request: Verb/Action (GET, POST, DELETE, PUT), Route, data, headers
- Someone (SERVER) receives that
- The receiver processes
- And then the receiver sends back a response
	- response: status code, data, headers

We're going to be making these requests with the browser, through the URL bar and HTML forms. URL bars can only make GET requests. HTML forms can only make GET and POST requests by default. That means we won't be able to use PUT and DELETE routes without some extra setup.

- Forms <-- this is going to be frustrating

## CRUD

CRUD is an acronym that stands for the things that we'd like to do with our data.

- Create
- Read
- Update
- Delete/DESTROY

Some people also like this other acronym:

*BREAD*

- Browse
- Read
- Edit
- Add
- Delete/Destroy

When we talk about performing CRUD actions, we're talking about performing these actions on some _data_. For example, _creating a USER_. Or, _editing a blog post_.

Here's our checklist for the demo:

- Express server to do this stuff with
- Pick some data to work with
	- Youtube Videos
- Bring in EJS!
- Figure out the CRUD routes for interacting with that data

### GET the New Video form

- *GET*
- /videos/new <-- this is my choice for now
- get me the form for a new video
	- video link
	- video title
	- video description

### CREATE a video

- POST
- /videos
- I need a way to see a creation form (new video form), so there's a different route for that
- create a youtube video
	- video link
	- video title
	- video description

### Read one video
- *GET*
- /videos/:id
- see just one youtube video
	- video link
	- video title
	- video description

### Read all videos
- *GET*
- /videos 
- see all youtube videos
	- video link
	- video title

### Update a single video
- *POST*
- /videos/:id
- update one youtube video at a time

### DESTROY
- *POST*
- /videos/:id/delete
- delete one youtube video at a time


## Things to note:

We only made GET and POST routes.

With the form, we can access the form data on the server side by:

1. Bringing in body-parser
2. Looking in `req.body`

`req.body` is an object! As its keys it will have all of the form input *names*. So, it is important for you to put a *name* attribute in your form inputs. The values in the `req.body` object are the values from the inputs.

## Other Instructor's Notes

- [Sadie Freeman](https://web.compass.lighthouselabs.ca/activities/164/lectures/2436)
- [David Mills](https://web.compass.lighthouselabs.ca/activities/164/lectures/2326)
