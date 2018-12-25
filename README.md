# ml-test

Test for ML in React and Redux + Express API by [Omar Garcia](https://github.com/ogarciarevett)

## SOFTWARE REQUIREMENTS

node >= 9@any\

# BACKEND / API

Ok, how test this little API?

just go to the **/server** using the terminal and run `npm run start` or `yarn start`

# API - extra features

> Swagger

I know, itsn't somthing required in this test, but anyway its a good practice do a good documentation.

Go ahead, test it! `http://localhost:7000/docs`

> Error handler

Yes, I did a error handler using the correct RESTful responses

> validators(input)

Joi + error hanlder === correct status codes :D

> HEALTH endpoint

Check the status of the api using the endpoint `/health` -> `http://localhost:7000/health`

> Minimal SECURITY

For that reason I used [helmet](https://github.com/helmetjs/helmet)
in this test.\

# FRONTEND

How test the frontend app ?
Go to the root folder and run `yarn start` or `npm start`

**NOTE:** Its neccesary has the server running before [Check it!](http:localhost:7000/health)

# FRONTEND - extra features

> Formatter script ( prettier )

> Linter (eslint)

## 'Cool Features' that I would have liked to do:

> BACKEND -> integration testing with supertest + mocha, unit test with mocha + chai ( out scope )

> FRONTEND -> storybook, unit tests with Jest + enzyme and e2e tests with cypress ( out scope)

> FRONTEND -> use react@next (userReducer + another react hooks and features instead of redux, redux-saga, etc.) ( out scope )

> SSR(Server side rendering) with NEXT.js instead of express + react ( this would be the better solution for this test)
