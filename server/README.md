# Description
This is a simple WebSocket chat server built with Node.js and Express. It allows clients to connect via WebSocket and exchange chat messages in real-time.

# Setup
 - npm install
 - node start // The server will start running on port 3001 by default.

# Endpoints
 - POST /auth/login: Endpoint for user login. Expects a JSON payload with email and password fields. Returns a JWT token if login is successful.
 - GET /meetings/123: Endpoint to retrieve meeting data for a specific meeting ID.
 - GET /meetings/meeting1/participants: Endpoint to retrieve participant data for a specific meeting.

# Technologies Used
 - Express.js: Fast, unopinionated, minimalist web framework for Node.js.
 - Socket.io: Real-time engine library for Node.js.
 - CORS: Middleware for Express.js to enable Cross-Origin Resource Sharing.
 - Body-parser: Middleware for Express.js to parse JSON request bodies.
