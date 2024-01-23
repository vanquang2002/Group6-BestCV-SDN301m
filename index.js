import { connect } from "./Connection/DBConnection.js";
import express from 'express';
import { UserRouter } from "./Routers/UserRouter.js";
import bodyParser from 'body-parser';
import { PostRouter } from "./Routers/PostRouter.js";

const app = express();
const port = 9999;
//Setup body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Connect to DB
connect();
//Get router
app.use('/api/user', UserRouter);
app.use('/api/post', PostRouter);

app.get('/', (req, res) => {
    res.send("hello world")
})




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
