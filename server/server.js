const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;

const app = express();
const server = createServer(app);
const io = new Server(server, {
	cors: {
		origin: process.env.CORS_ORIGIN || '*'
	},
});

app.use(bodyParser.json());
const users = [
	{
		email: 'doodle@gmail.com',
		password: 'pass123',
	},
	{
		email: 'doodle1@gmail.com',
		password: 'pass123',
	},
	{
		email: 'doodle2@gmail.com',
		password: 'pass123',
	},
];

app.use(cors());

io.on('connection', (socket) => {
	console.log('New client connected');

	socket.on('disconnect', () => {
		console.log('Client disconnected');
	});

	// Handle chat message events
	socket.on('outgoing_message', (msg) => {
		io.emit('incoming_message', msg);
	});
});

// Route for user login
app.post('/auth/login', (req, res) => {
	const { email, password } = req.body;
	// Find user in mock user data
	const user = users.find(
		(user) => user.email === email && user.password === password
	);

	if (!user) {
		return res.status(401).json({ error: 'Invalid username or password' });
	}

	// Ideally, Generate JWT token
	const token = email;

	// Send token in response
	res.json({ token, user: email });
});

app.get('/meetings/meeting1', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.send({
		meetings: [{ id: 'meeting1', url: 'meeting1', title: 'Interview 1' }],
	});
});

app.get('/meetings/meeting1/participants', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.json({
		participants: [
			{
				id: 'doodle@gmail.com',
				name: 'Chhavi',
				email: 'doodle@gmail.com',
				image: 'chhavi.png',
				isOrganizer: true,
			},
			{
				id: 'doodle1@gmail.com',
				name: 'Robert',
				email: 'doodle1@gmail.com',
				image: 'robert.png',
				isOrganizer: false,
			},
			{
				id: 'doodle2@gmail.com',
				name: 'Travis',
				email: 'doodle2@gmail.com',
				image: 'travis.png',
				isOrganizer: false,
			},
		],
	});
});

server.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
