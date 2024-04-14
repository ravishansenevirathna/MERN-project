const app = require("./app");
const port = 8070;
const host = '127.0.0.1';


const server = app.listen(port,host,() => {
    console.log(`node server is listening to ${server.address().port}`)
})