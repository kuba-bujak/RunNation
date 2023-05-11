const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Course = require('./courses');

const UserSchema = new Schema({
    firstName: {
        type: String,
    },
    surname: {
        type: String,
    },
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
    courses: [
		{
			 type: Schema.Types.ObjectId,
			 ref: 'Course'
		}
  ]
}, {
    timestamps: true,
});


UserSchema.post('findOneAndDelete', async function (doc) {
	if (doc) {
		await Course.deleteMany({
			_id: {
				$in: doc.courses
			}
		})
	}
})

module.exports = mongoose.model('User', UserSchema);