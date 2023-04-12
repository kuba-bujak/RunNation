const asyncHandler = require('express-async-handler');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, role, password } = req.body;
    if (!username || !email || !role || !password) {
        res.status(400);
        throw new Error("Wszystkie pola są wymagane");
    }
    const emailAvailable = await User.findOne({email});
    const usernameAvailable = await User.findOne({username});

    if (emailAvailable) {
        res.status(400);
        throw new Error("Adres email jest już zajęty")
    }

    if (usernameAvailable) {
        res.status(400);
        throw new Error("Nazwa użytkownika jest już zajęta")
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password", hashedPassword);

    const user = await User.create({
        username,
        email,
        role,
        password: hashedPassword
    });

    console.log(`Utworzono użytkownika ${user}`);

    if(user) {
        res.status(201).json({ _id: user.id, email: user.email });
    } else {
        res.status(400);
        throw new Error("Dane użytkownika nie są poprawne");
    }

    res.json({ message: 'Użytkownik został zarejestrowany' })
});

const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400);
        throw new Error("Wszystkie pola wymagane");
    }

    const user = await User.findOne({ username });
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                role: user.role,
                id: user.id
            }
        }, process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1min' }
        );
        res.status(200).json({ accessToken })
    } else {
        res.status(401);
        throw new Error("Nazwa użytkownika lub hasło są niepoprawne")
    }
});

const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user)
});

module.exports = { registerUser, loginUser, currentUser };