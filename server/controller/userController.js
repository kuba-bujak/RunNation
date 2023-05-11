const asyncHandler = require('express-async-handler');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, role, password } = req.body;
    if (!username || !email || !role || !password) {
        res.status(400).json({ message: "Wszystkie pola są wymagane" })
        throw new Error("Wszystkie pola są wymagane");
    }
    const emailAvailable = await User.findOne({email});
    const usernameAvailable = await User.findOne({username});

    if (emailAvailable) {
        res.status(400).json({ message: "Adres email jest już zajęty" })
        throw new Error("Adres email jest już zajęty")
    }

    if (usernameAvailable) {
        res.status(400).json({ message: "Nazwa użytkownika jest już zajęta" })
        throw new Error("Nazwa użytkownika jest już zajęta")
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        email,
        role,
        password: hashedPassword
    });

    if(user) {
        res.status(201).json({ _id: user.id, email: user.email, message: "Utworzono konto" });
    } else {
        res.status(400).json({ message: "Dane użytkownika nie są poprawne" })
        throw new Error("Dane użytkownika nie są poprawne");
    }});

const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400).json({ message: "Wszystkie pola wymagane" });
        throw new Error("Wszystkie pola wymagane");
    }

    const user = await User.findOne({ username });
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                role: user.role,
                id: user.id
            }
        }, process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '2h' }
        );
        res.status(200).json({ accessToken, message: "Pomyślnie zalogowano" })
    } else {
        res.status(401).json({ message: "Nazwa użytkownika lub hasło są niepoprawne" });
        throw new Error("Nazwa użytkownika lub hasło są niepoprawne");
    }
});

const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
});

const getProfile = asyncHandler(async (req, res) => {
    const id = req.user.id;
    const userProfile = await User.findById(id);
    if (userProfile) {
        res.status(200).json(userProfile)
    } else {
        res.status(400);
        throw new Error("Nie udało się pobrać użytkownika z bazy danych");
    }
    
})

const editProfile = asyncHandler(async (req, res) => {
    const id = req.user.id;
    const userProfile = await User.findByIdAndUpdate(id, req.body);
    if (userProfile) {
        res.status(200).json(userProfile)
    } else {
        res.status(400);
        throw new Error("Nie udało się zaktualizować danych użytkownika w bazie danych");
    }
})

module.exports = { registerUser, loginUser, currentUser, getProfile, editProfile };