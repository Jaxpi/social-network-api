# Social Network API

Please view the walkthrough at this link for a visual guide to accessing and utilizing this application:
https://watch.screencastify.com/v/ChyZzxQDQFenfGM0ddZa<br>


## Description

This application is a back-end api for a social network program. It contains the models, routes, and controllers for the adding, updating, and deleting of users, thoughts, friends, and reactions. It utilizes Mongodb and Mongoose along with expressjs.


## Installation

To install you need to open the application in a program such as VS Code, right-click on the server.js file and select "open integrated terminal". Once opened type in "npm install" to install the required software programs that are used in the application, then "npm i" to initialize. Lastly type "npm start" to connect to the server. When that is done you can use a program such as Insomnia Core to navigate through the routes and see the changes being made. If you don't have a program like Insomnia Core you can use the http://localhost:3001/api route in your browser, but it will be less user-friendly visually.

## Usage

Following the route paths defined in the files a user can first create users. Once users are created they can be updated, they can create/update/delete thoughts, they can add/remove friends, and they can add/remove reactions to others' thoughts (or their own). When a thought is deleted all the reactions associated with it will be deleted as well. The same is true for the thoughts of a user when the user is deleted.

## License

MIT License

Copyright (c) 2022 Jackson Impellizeri

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
