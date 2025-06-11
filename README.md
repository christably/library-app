# 📚 Library Management Backend API

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Node.js](https://img.shields.io/badge/node-%3E=18.0.0-brightgreen)
![Status](https://img.shields.io/badge/status-active-success)

A modern **Node.js + Express.js** backend API for managing a digital library. Built with scalability, structure, and REST principles — designed to serve a frontend application seamlessly.

---

## 🚀 Features

✨ Full **CRUD** functionality
📂 Data persistence using `books.json` file
🔐 Robust **validation** using `Joi`
🧩 Modular folder structure with **middlewares** and **controllers**
🆔 UUIDs for unique book IDs
📦 Ready for deployment (Render, Railway, Vercel, etc.)

---

## 🏗️ Folder Structure

```bash
library-backend/
│
├── controllers/          # Book logic (CRUD)
├── data/                 # books.json file (your DB)
├── middlewares/          # Custom middleware
├── routes/               # Book routes
├── validators/           # Joi schema validation
├── .gitignore
├── index.js              # Entry point
├── package.json
└── README.md
```

---

## 🛠️ Setup Instructions

### 📥 Clone & Install

```bash
git clone https://github.com/your-username/library-backend.git
cd library-backend
npm install
```

### 🔃 Run Server (with auto-reload)

```bash
npm run dev
```

> Requires `nodemon`. Already included in `devDependencies`.

### ⚙️ Run Server (production)

```bash
npm start
```

> The server runs at `http://localhost:4000` (or your set `PORT`).

---

## 🌐 Base API URL

```
http://localhost:4000/api/v1/books
```

---

## 📡 API Endpoints

| Method | Endpoint            | Description             |
| ------ | ------------------- | ----------------------- |
| GET    | `/api/v1/books`     | Get all books           |
| GET    | `/api/v1/books/:id` | Get a single book by ID |
| POST   | `/api/v1/books`     | Add a new book          |
| PUT    | `/api/v1/books/:id` | Update a book by ID     |
| DELETE | `/api/v1/books/:id` | Delete a book by ID     |

---

## 🧾 Sample Book Object

```json
{
  "title": "Things Fall Apart",
  "author": "Chinua Achebe",
  "image": "https://example.com/tfa.jpg",
  "genre": {
    "type": "Fiction",
    "category": "African Books"
  },
  "ratings": 4.7,
  "price": 9.99
}
```

> `price` can be `null` for free books.

---

## ✅ Validation Rules (Joi)

* `title`: *required*, string
* `author`: *required*, string
* `image`: *required*, valid URI
* `genre.type`: *required*, "Fiction" or "Non-fiction"
* `genre.category`: *required*, string
* `ratings`: *required*, number between 0 and 5
* `price`: *optional*, number (or null)

---

## 📤 Postman Collection

✅ Download the full Postman Collection here: [`library-api.postman_collection.json`](./library-api.postman_collection.json)

Or import this base URL and test endpoints manually:

```
http://localhost:4000/api/v1/books
```

---

## 🌍 Deployment Instructions (Render)

1. Push this project to GitHub
2. Visit [https://render.com](https://render.com)
3. Click **"New Web Service"**
4. Connect your GitHub repo
5. Set:

   * **Build Command**: `npm install`
   * **Start Command**: `npm start`
   * **Environment**: `Node`
6. Make sure `PORT` is set in your Render environment. Your app uses:

```js
const PORT = process.env.PORT || 4000;
```

---

## ✨ Tips

* ✅ Make sure `books.json` is writable (not readonly in version control)
* 🧪 Always test your endpoints using **Postman** or **Thunder Client**
* 🛡️ Add security headers or CORS if needed when frontend is separate

---

## 👤 Author

**Your Name**
📧 [your.email@example.com](mailto:christabelaidoo202@gmail.com)
🔗 [GitHub](https://github.com/christably)

---

## 🪪 License

MIT License
