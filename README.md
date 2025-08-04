# Pinterest Backend API

A Node.js backend application for a Pinterest-like platform, built with Express.js and MongoDB. This project provides user authentication, post management, and basic social features.

## 🚀 Features

- User registration and management
- Post creation and management
- User-post relationships
- Like functionality for posts
- MongoDB integration with Mongoose ODM
- RESTful API endpoints

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **ODM**: Mongoose
- **Template Engine**: EJS
- **Development Tool**: Nodemon

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (running on localhost:27017)
- npm or yarn package manager

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DynaMax000/pinterest-react-backend.git
   cd pinterest-react-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start MongoDB**
   Make sure MongoDB is running on your local machine at `mongodb://localhost:27017/mydatabase`

4. **Run the application**
   ```bash
   npm start
   # or for development with auto-reload
   npx nodemon routes/index.js
   ```

5. **Access the application**
   Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
pinterest-backend/
├── models/
│   ├── User.models.js      # User schema and model
│   └── Post.models.js      # Post schema and model
├── routes/
│   └── index.js           # Main route handlers
├── views/                 # EJS templates (empty)
├── public/               # Static assets (empty)
├── package.json          # Project dependencies
└── README.md            # Project documentation
```

## 📊 Database Schema

### User Model
```javascript
{
  username: String (required, unique),
  password: String (required),
  email: String (required, unique),
  fullName: String (required),
  dp: String (profile picture),
  posts: [ObjectId] (references to Post)
}
```

### Post Model
```javascript
{
  postText: String (required),
  user: ObjectId (required, references User),
  createdAt: Date (default: now),
  likes: [ObjectId] (references to User)
}
```

## 🛣️ API Endpoints

### User Routes
- `GET /` - Welcome message
- `GET /create-user` - User creation form (renders EJS template)

### Post Routes
- `POST /create-post` - Create a new post

## 🚧 Current Issues & TODOs

The codebase has several areas that need attention:

1. **Mixed Module Systems**: The project mixes CommonJS (`require`) and ES6 modules (`import`)
2. **Incomplete Routes**: Some route handlers are not fully implemented
3. **Missing Validation**: No input validation or error handling
4. **Security**: No authentication middleware or password hashing
5. **Missing Scripts**: package.json lacks start script

## 🔮 Future Enhancements

- [ ] Implement proper authentication (JWT)
- [ ] Add password hashing (bcrypt)
- [ ] Complete all CRUD operations
- [ ] Add input validation and sanitization
- [ ] Implement proper error handling
- [ ] Add unit and integration tests
- [ ] Set up environment configuration
- [ ] Add image upload functionality
- [ ] Implement search and filtering
- [ ] Add pagination for posts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**DynaMax000**
- GitHub: [@DynaMax000](https://github.com/DynaMax000)

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

*This project is currently in development. Contributions and feedback are welcome!*