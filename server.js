const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 3000
const bodyParser = require('body-parser')

const videos = {
	'L53gjP-TtGE': {
		id: 'L53gjP-TtGE',
		title: 'Kanye West - POWER',
		description: 'No one man should have all that power.'
	},
	'87hf763': {
		id: 'BRMK77NUsyU',
		title: 'Dogs are Great!',
		description: 'I love dogs!'
	}
}

app.set('view engine', 'ejs');

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}));


const name = 'Bob'
app.get('/', (req, res) => {
	res.send(`
<html>
	<head>
	</head>
	<body>
		${name}
	</body>
</html>
		`)
})

app.post('/videos', (req, res) => {
	console.log('I am making a new video')
	console.log(req.body)

	const id = req.body.id
	const title = req.body.title
	const description = req.body.description

	// store the video in the database
	// notice that we use [] because id is dynamic
	videos[id] = {
		id: id,
		title: title,
		description: description
	}

	res.redirect('/videos')
})

app.post('/videos/:id', (req, res) => {
	console.log('I am editing a video')

	const id = req.params.id
	const title = req.body.title // again, from the form
	const description = req.body.description

	// update the video in the database
	// notice that we use [] because id is dynamic
	videos[id] = {
		id: id,
		title: title,
		description: description
	}

	res.redirect('/videos/' + id)	
})

app.post('/videos/:id/delete', (req, res) => {
	const id = req.params.id
	delete videos[id] // delete from the DB

	res.redirect('/videos')
})

app.get('/videos', (req, res) => {
	console.log('all the videos!')

	const templateVars = {
		videos: videos,
		message: 'Hello world'
	}
	
	res.render('videos', templateVars)
})

app.get('/videos/new', (req, res) => {
	res.render('new_video')
})

app.get('/videos/:id', (req, res) => {
	console.log('The params!', req.params)

	const id = req.params.id

	const video = videos[id]

	const templateVars = {
		video: video
	}

	res.render('show_video', templateVars)
})


app.listen(3123, '0.0.0.0', () => {
	console.log(`Listening on port ${port}!`)
})