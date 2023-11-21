# URL Shortener Service

This URL Shortener is a simple web service built with Node.js, Express, and TypeScript. It provides endpoints to encode a URL into a shortened format and to decode a shortened URL back to its original form.

## Prerequisites

-   Node.js (version 12 or higher recommended)
-   npm (comes with Node.js)

## Installation

To set up the URL shortener service on your local machine, follow these steps:

1. Clone the Repository

```
git clone http://smarter-conta-kggucu@git.codesubmit.io/smarter-contact/url-shortener-xngcnh
cd url-shortener-xngcnh
```

2. Install Dependencies

```
npm install
```

## Running the Application

Start the Server

-   To start the Express server, run:

```
npm start
```

-   The server will start and listen on a default port 3000. You should see a message like `Server running on http://localhost:3000`.

## Testing

-   To run the tests, execute:

```
npm test
```

## Usage

The application provides two endpoints:

-   ### Encode (Shorten) URL

```
Endpoint: POST /encode
Payload: { "url": "https://example.com" }
Response: { "shortenedUrl": "http://short.est/YVlkID" }
```

-   ### Decode (Retrieve Original) URL

```
Endpoint: GET /decode
Query Parameter: ?shortenedUrl=http://short.est/YVlkID
Response: https://example.com
```

