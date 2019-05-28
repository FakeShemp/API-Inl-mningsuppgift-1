import express, { json, urlencoded } from 'express';
import routes from "./routes";
import { connect } from 'mongoose';
const app = express();

let allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
}

connect('mongodb://localhost:27017/students', { useNewUrlParser: true });

const port = process.env.PORT || 3012;

app.use(json());
app.use(urlencoded({ extended: true }))
app.use(allowCrossDomain)
app.use('/', routes);

app.listen(port, () => {
    console.info(`Server is listening on port ${port}.`);
});
