URL Shortener Service
This URL shortener is a simple web service built with Node.js, Express, and TypeScript. It provides endpoints to encode a URL into a shortened format and to decode a shortened URL back to its original form.

Prerequisites
Node.js (version 12 or higher recommended)
npm (usually comes with Node.js)
Installation
To set up the URL shortener service on your local machine, follow these steps:

Clone the Repository

Clone this repository to your local machine using git:
bash
Copy code
git clone [repository URL]
cd [repository name]
Install Dependencies

Run the following command in the root directory of the project to install the necessary dependencies:
Copy code
npm install
Running the Application
Start the Server
To start the Express server, run:
sql
Copy code
npm start
The server will start and listen on a default port (e.g., 3000). You should see a message like Server running on http://localhost:3000.
Testing
Running Tests
To run the tests with Jest, execute:
bash
Copy code
npm test
This will run all the tests written for the application and display the test results.
Usage
The application provides two main endpoints:

Encode (Shorten) a URL

Endpoint: POST /encode
Payload: { "url": "https://example.com" }
Response: The shortened URL.
Decode (Retrieve Original URL)

Endpoint: GET /decode
Query Parameter: ?shortenedUrl=[shortened URL]
Response: The original URL.
