const app = require("./app.js"); //getting app from the app.js file

//getting the port from environment variable
const PORT = 3000;

//making server listen on the specific port
app.listen(PORT, () => console.log(`User System Server is running at port ${PORT}...`));