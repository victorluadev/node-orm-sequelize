import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
	res
		.status(200)
		.send({message: "Hello to API"})
});

export default app;