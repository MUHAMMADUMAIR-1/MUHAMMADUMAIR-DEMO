const express = require('express');
const PORT = 3000;
const app = express();

app.use(express.json());

// Array to store user data with some initial users
let users = [
    { name: 'Ali', email: 'alice@example.com', password: 'password123' },
    { name: 'Muhammad', email: 'bob@example.com', password: 'securepass' },
    {
        name: 'Umar', email: 'test@example.com', password: 123456
    }
];

// POST request to handle user registration
app.post('/data', (req, res) => {
    const { name, email, password } = req.body;

    // Check if email already exists in the users array
    const userExists = users.find(users => users.email === email);
    if (userExists) {
        // If email exists, send success response
        return res.status(200).send('User already exists.');
    }

    else{
        return res.status(401).json({
          message:"Invalid username or password"
        })}
});

// Start the server
app.listen(PORT, () => {
    console.log(`My server is listening on PORT ${PORT}`);
});
