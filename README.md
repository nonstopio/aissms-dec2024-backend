## 📚 Books Library

A **Node.js** and **MongoDB** application for managing books in a library. Users can create, view, update, and delete book records efficiently.

---

### 🚀 **Features**
- Add, update, and delete books.
- View a list of all available books.
- RESTful APIs for easy integration.
- MongoDB database for efficient storage.

---

### 🛠 **Tech Stack**
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Version Control**: Git
- **Tools**: REST Client(VS code Extension),Postman (for API testing)

---

### 📋 **Installation**

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd books-library
   ```

2. **Install Dependencies**:
   Make sure you have **Node.js** and **npm** installed, then run:
   ```bash
   npm install
   ```

3. **Set Up MongoDB**:
   - Install and run MongoDB locally or connect to MongoDB Atlas.
   - Update the database connection string in `.env`:
     ```env
     MONGODB_URI=mongodb://127.0.0.1:27017/booksLibrary
     ```

4. **Run the Application**:
   Start the server with:
   ```bash
   npm start
   ```
   The app will be available at: **http://localhost:3000**

---

### 🌐 **API Endpoints**

| Method | Endpoint              | Description            |
|--------|-----------------------|------------------------|
| GET    | `/api/books`          | Fetch all books        |
| GET    | `/api/books/:id`      | Get a single book      |
| POST   | `/api/books`          | Add a new book         |
| PUT    | `/api/books/:id`      | Update a book          |
| DELETE | `/api/books/:id`      | Delete a book          |

---

### 🗂 **Project Structure**
```
books-library/
│
├── models/
│   └── Book.js            # Mongoose model for books
├── routes/
│   └── books.js           # Routes for book APIs
├── controllers/
│   └── booksController.js # Logic for handling API requests
├── config/
│   └── db.js              # MongoDB connection
│
├── .gitignore             # Ignore node_modules
├── package.json           # Project metadata
└── server.js              # Main application file
```

---

### 🤝 **Contributing**
Contributions are welcome! Feel free to submit a pull request.

1. Fork the project.
2. Create your feature branch:
   ```bash
   git checkout -b feature/my-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add my feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/my-feature
   ```
5. Open a pull request.

---
