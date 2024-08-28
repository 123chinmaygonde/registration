## overview
full stack User Registration project build with React.js for frontend and node js, express js for backend development

## features
Name: Minimum 2 characters
Age: Number between 0 and 120
   Date of Birth: Must be a valid date
   Password: Minimum 10 characters, alphanumeric with at least one digit
Gender: Dropdown with options (Male, Female, Other) retrieved from an API
   About: Text field with a character limit of 5000

   ## Getting started
   Frontend:React.js
   Backend:Node.js
   Database: Mongodb

   Create new user
   url:http://localhost:5000/api/users
   method:POST
   {
    "name": "chinmay vilas gonde",
    "age": 24,
    "dob": "2000-05-30T00:00:00.000Z",
    "password": "chinugonde12345",
    "gender": "Male",
    "about": "created new user",
    "_id": "66cefd56f98529607d3d3b87",
    "__v": 0
}

url:http://localhost:5000/api/users
method:GET

[
    {
        "_id": "66ce958c133049f71768931b",
        "name": "soukhya",
        "age": 12,
        "dob": "2022-12-08T18:30:00.000Z",
        "password": "123456789100",
        "gender": "Male",
        "about": "09877",
        "__v": 0
    },
    {
        "_id": "66ce95fe7adb33da2464f152",
        "name": "ss",
        "age": 3,
        "dob": "2024-08-06T00:00:00.000Z",
        "password": "ssssssssssssss",
        "gender": "Female",
        "about": "ss",
        "__v": 0
    },
    {
        "_id": "66ce96107adb33da2464f156",
        "name": "ss22",
        "age": 3,
        "dob": "2024-08-06T00:00:00.000Z",
        "password": "ssssss11111",
        "gender": "Female",
        "about": "ss",
        "__v": 0
    }

    ]
    
