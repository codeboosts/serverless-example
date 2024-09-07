# Course Management App (Serverless + Express + MongoDB)

This is a serverless course management app built with **Serverless Framework**, **Express**, and **MongoDB**. The app allows users to sign up, log in, and manage courses (create, fetch, and enroll in courses).

## Features

- User Sign-Up & Login (JWT Authentication)
- Course Creation
- Fetch All Courses
- Enroll in Courses

## Tech Stack

- **Backend**: Node.js, Express, Serverless Framework
- **Database**: MongoDB (Atlas or Local)
- **Authentication**: JWT
- **Deployment**: AWS Lambda (via Serverless Framework)

## Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/codeboosts/serverless-example.git course-server
   cd course-server
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create a `.env` file** with the following variables:
   ```
   MONGODB_URI=<Your MongoDB connection string>
   JWT_SECRET=<Your JWT secret>
   ```

4. **Deploy the project**:
   ```bash
   sls deploy
   ```

5. **Run locally**:
   ```bash
   sls offline
   ```

## API Endpoints

- **POST** `/auth/signup` - User Sign-Up
- **POST** `/auth/login` - User Login
- **POST** `/course` - Create a Course
- **GET** `/course` - Get All Courses
- **POST** `/course/enroll` - Enroll in a Course
