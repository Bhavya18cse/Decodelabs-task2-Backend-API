const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let users = [];

// Home Route
app.get("/", (req, res) => {
    res.send("Backend API is Running 🚀");
});

// Get All Users
app.get("/users", (req, res) => {
    res.json(users);
});

// Add User
app.post("/users", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            message: "Name and Email are required"
        });
    }

    const user = {
        id: users.length + 1,
        name,
        email
    };

    users.push(user);

    res.status(201).json({
        message: "User Added Successfully",
        user
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});