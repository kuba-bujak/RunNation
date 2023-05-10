const asyncHandler = require('express-async-handler');
const Course = require('../models/courses');
const User = require('../models/user');

const getCourses = asyncHandler(async (req, res) => {
    const courses = await Course.find({});
    res.status(200).json(courses);
})

const addUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const course = await Course.findById(id);
    const user = await User.findById(req.user.id)
    course.users.push(req.user.id);
    user.courses.push(id);
    const updatedCourse = await course.save();
    const updatedUser = await user.save();

    if (updatedCourse && updatedUser) {
        res.status(200).json(updatedCourse);
    } else {
        res.statusMessage(400);
        throw new Error("Coś poszło nie tak");
    }

})

module.exports = { getCourses, addUser };