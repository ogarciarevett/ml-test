# ml-test
Test for ML in React + Express API by [Omar Garcia](https://github.com/ogarciarevett)

## SOFTWARE REQUIREMENTS
node >= 9@any\
<--------------------------------------------------->
## API
Ok, how test this  little API?

just go to the root folder using the terminal and run `npm run server` or `yarn server`

# API - extras
### Swagger
I know, itsn't somthing required in this test, but anyway its a good practice do a good documentation.

Go ahead, test it! `http://localhost:7000/docs`

### Error handler
Yes, I did a error handler using the correct RESTFUL responses

### HEALTH endpoint

Check the status of the api using the endpoint `/health` -> `http://localhost:7000/health`

### Minimal SECURITY
For that reason I used [helmet](https://github.com/helmetjs/helmet)
 in this test.