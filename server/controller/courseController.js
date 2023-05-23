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

const createCourse = asyncHandler(async (req, res) => {
    const {  title, location, img, dateFrom, dateTo, hoursFrom, hoursTo, level, coach, language } = req.body;
    if (!title || !location || !img || !dateFrom || !dateTo || !hoursFrom || !language || !hoursTo || !level || !coach) {
        res.status(400);
        throw new Error("Wszystkie pola są wymagane");
    }

    const course = await Course.create({
        title, 
        location,
        img,
        dateFrom,
        dateTo,
        hoursFrom,
        hoursTo,
        level,
        coach,
        language
    });

    if (course) {
        res.status(201).json(course);
    } else {
        res.status(400);
        throw new Error("Pola wydarzenia nie są poprawne")
    }

    res.send({ message: "Stworzono kurs" } )
})

const getCourse = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const course = await Course.findById(id);
    if (course) {
        res.status(200).json(course);
    } else {
        res.status(400);
        throw new Error("Kurs nie został znaleziony");
    }
})

const editCourse = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const {  title, location, img, dateFrom, dateTo, hoursFrom, hoursTo, level, coach, language } = req.body;

    if (!title || !location || !img || !dateFrom || !dateTo || !hoursFrom || !language || !hoursTo || !level || !coach) {
        res.status(400);
        throw new Error("Wszystkie pola są wymagane");
    }

    const course = await Course.findByIdAndUpdate(id, req.body);

    if (course) {
        res.status(200).json(course)
    } else {
        res.status(400);
        throw new Error("Nie udało się edytować kursu");
    }

    res.send( { message: "Edytowano kurs" } )
})

const deleteCourse = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const deletedCourse = await Course.findByIdAndDelete(id);
    for (let user of deletedCourse.users) {
        const updatedUser = await User.updateOne(
            { _id: user },
            { $pull: { courses: id } }
        );
    }
    if (deleteCourse) {
        res.status(200).json({ message: "Pomyślnie usunięto" })
    } else {
        res.status(400);
        throw new Error("Nie udało się usunąć kursu");
    }
})

module.exports = { getCourses, addUser, createCourse, getCourse, editCourse, deleteCourse };