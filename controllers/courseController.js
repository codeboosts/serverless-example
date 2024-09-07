const express = require('express');
const Course = require('../models/Course');
const connectToDatabase = require('../utils/db');
const User = require('../models/User');
const router = express.Router();

// Create a new course
router.post('/', async (req, res) => {
  try {
    await connectToDatabase();
    const { title, description, instructor } = req.body;

    const newCourse = new Course({ title, description, instructor });
    await newCourse.save();

    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ message: 'Error creating course', error });
  }
});

// Get all courses
router.get('/', async (req, res) => {
  try {
    await connectToDatabase();
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching courses', error });
  }
});

// Enroll in a course
router.post('/enroll', async (req, res) => {
  try {
    await connectToDatabase();
    const { courseId, userId } = req.body;

    const course = await Course.findById(courseId);
    const user = await User.findById(userId);

    if (!course || !user) {
      return res.status(404).json({ message: 'Course or User not found' });
    }

    course.students.push(user);
    user.courses.push(course);

    await course.save();
    await user.save();

    res.status(200).json({ message: 'User enrolled in course' });
  } catch (error) {
    res.status(500).json({ message: 'Error enrolling in course', error });
  }
});

module.exports = router;
