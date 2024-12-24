# Full-Stack Project Template

This template provides a comprehensive guide to set up a full-stack project with the following technologies:

## Frontend:

- TypeScript
- React
- Tailwind CSS
- TanStack Query (React Query)
- Axios

## Backend:

- Node.js
- Express
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT)

---

## Project Structure:

```
project-root/
├── Client/
└── Server/
```

---

## 1. Initialize the Backend:

### Step 1: Create the Server directory and initialize it with npm:

```bash
mkdir Server
cd Server
npm init -y
```

### Step 2: Install necessary dependencies:

```bash
npm install express mongoose jsonwebtoken dotenv
```

### Step 3: Install development dependencies:

```bash
npm install --save-dev nodemon
```

### Step 4: Set up the project structure:

```
Server/
├── controllers/
├── models/
├── routes/
├── middleware/
├── .env
├── app.js
└── package.json
```

### Step 5: Configure the `.env` file with your environment variables:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Step 6: Set up `app.js`:

```javascript
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
  console.log(\`Server running on port \${process.env.PORT}\`);
});
```

---

## 2. Initialize the Frontend:

### Step 1: Navigate back to the project root and create the frontend directory:

```bash
cd ..
mkdir Client
cd Client
```

### Step 2: Initialize a new Vite project with React and TypeScript:

```bash
npm init vite@latest
```

- Select `React` and `TypeScript`.

### Step 3: Navigate to the project directory and install dependencies:

```bash
cd your_project_name
npm install
```

### Step 4: Install additional dependencies:

```bash
npm install axios @tanstack/react-query
```

### Step 5: Install Tailwind CSS:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 6: Configure `tailwind.config.js`:

```javascript
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Step 7: Add Tailwind directives to `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 3. Run the Development Servers:

### Backend:

```bash
cd Server
npm start
```

Ensure `package.json` has the following script:

```json
"scripts": {
  "start": "nodemon app.js"
}
```

### Frontend:

```bash
cd Client
npm run dev
```

---

## 4. Additional Configuration:

### Proxy Setup:

Set up a proxy in the Vite configuration to handle API requests.

### CORS Configuration:

Ensure the backend is configured to accept requests from the frontend's origin.

---

## 5. Version Control:

### Initialize a Git repository:

```bash
git init
```

### Add `.gitignore`:

- In both `backend` and `frontend` directories, exclude `node_modules` and environment files.

---

## 6. Documentation:

Maintain a `README.md` file in the project root for setup instructions and other details.

---

Happy coding!
