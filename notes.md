# W 2 D 3: CRUD with Express

https://github.com/mde/ejs/wiki/Using-EJS-with-Express

Routes:

- ways of interacting with the "back end"/server/data


Clients (or in our case cows) can make requests to a server using HTTP.

HTTP MEANS:

- Someone (CLIENT) makes a request
	request: Verb/Action (GET, POST, DELETE, PUT), Route, data, headers
- Someone (SERVER) receives that
- The receiver processes
- And then the receiver sends back a response

	- response: status code, data, headers

Endpoint, Route, Path, URL
Verb, Action


- EJS
	- Forms <-- this is going to be frustrating


CRUD

- Create
- Read
- Update
- Delete/DESTROY

BREAD

- Browse
- Read
- Edit
- Add
- Delete/Destroy


URLS 
Users


Express server to do this stuff with - CHECK!

Pick some data to work with

	- Youtube Videos (possibly of dogs, cats are allowed, I don't like ferrets)

Bring in EJS!

Figure out the CRUD routes for interacting with that data

GET THE NEW VIDEO FORM
	- GET
	- /videos/new <-- this is my choice for now
	- /new_video

	- get me the form for a new video
		- video link
		- video title
		- video description

CREATE
	- POST
	- /videos

	- I need a way to see a creation form (new video form)

	- create a youtube video
		- video link
		- video title
		- video description

READ ONE - CHECK!
	- *GET*
	- /videos/:id

	- see just one youtube video
		- video link
		- video title
		- video description

READ ALL - CHECK!
	- *GET*
	- /videos 

	- see all youtube videos
		- video link
		- video title

UPDATE
	- update one youtube video at a time

DESTROY
	- delete one youtube video at a time



