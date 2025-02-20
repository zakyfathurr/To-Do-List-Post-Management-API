# To-Do List Post Management API

## 🛠️ Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone git@github.com:zakyfathurr/To-Do-List-Post-Management-API.git
cd To-Do-List-Post-Management-API
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and configure the following variables:
```sh
PORT=4000
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
```

### 4️⃣ Import the Database
Don't forget to import Database MySql with the file that i have shared


### 5️⃣ Start the Server
```sh
npm start
```

The API will be running at:
```
http://localhost:4000
```

---

## 📖 API Documentation
After starting the server, visit the **Swagger UI** to explore API endpoints:
```
http://localhost:4000/api-docs
```


---

## 📜 Folder Structure
```
To-Do-List-Post-Management-API/
├── connection/      # Database connection setup
├── controller/      # Controllers for handling requests
├── docs/            # API documentation (Swagger)
├── middleware/      # Middleware (logging, error handling)
├── models/          # Database models
├── routes/          # API route definitions
├── utils/           # Utility functions
├── .env             # Environment variables
├── package.json     # Project dependencies
└── server.js        # Entry point of the application
```


