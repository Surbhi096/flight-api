# ✈️ Flight + Hotel Search API

A modular RESTful API built using **Node.js** and **Express.js** that integrates with the **Amadeus API** to fetch:

- Flight routes between two airports on a given date for a certain number of adults
- Hotels near the destination airport

---

## 📁 Folder Structure

```bash
flight-api/
├── src/
│   ├── config/
│   │   └── config.js
│   │
│   ├── controllers/
│   │   └── flights.controller.js
│   │
│   ├── middleware/
│   │   └── flight.validator.js
│   │
│   ├── routes/
│   │   ├── index.js
│   │   └── flights.route.js
│   │
│   ├── services/
│   │   ├── flights.service.js
│   │   └── hotel.service.js
│   │
│   └── utils/
│       └── tokenManager.js
│
├── server.js
├── .env
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```


## 🚀 Features

- 🔐 Token-based OAuth2 authentication with Amadeus
- 🛫 Search flights with origin, destination, date, and adult count
- 🏨 Retrieve hotels around destination city using Amadeus hotel API
- 🧾 Structured response with total price and flight segments
- 🔍 Query parameter validation using `express-validator`
- 📦 Clean and scalable folder architecture

---

## 🧩 Dependencies

- [Express](https://expressjs.com/)
- [Axios](https://axios-http.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express-validator](https://express-validator.github.io/)

---

## 🔧 Environment Setup

##  Clone and Install

```bash
git clone https://github.com/Surbhi096/flight-api.git
cd flight-api
npm install
```

## 🔐 Environment Variables

Create a `.env` file at the root:

```env
PORT = 4000
BASE_URL = URL
CLIENT_ID = your_client_id
CLIENT_SECRET = your_client_secret
```

## 🚀 Run the Project

Start in development mode (auto-reload with nodemon):

```
npm run dev
```

Start in production mode:

```
npm run start
```





