const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "Nazwa użytkownika wymagana"],
        unique: [true, "Nazwa użytkownika zajęta"]
    },
    email: {
        type: String,
        required: [true, "Adres email wymagany"],
        unique: [true, "Adres email jest już zajęty"]
    },
    role: {
        required: [true, "Podaj rolę w sporcie"],
        type: String
    },
    password: {
        type: String,
        required: [true, "Hasło wymagane"]
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);