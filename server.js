import express from "express";
import config from "./config";
import path from 'path';
import sassMiddleware from 'node-sass-middleware';


const app = express();

app.use("/bundle", express.static(__dirname + "/public"))
app.use("/styles", express.static(__dirname + "/public/css"))
app.use("/scripts", express.static(__dirname + "/public/js"))
app.use("/img",express.static(__dirname + "/public/images"))

app.use("/res-styles", express.static(__dirname + "/node_modules/bootstrap/dist/css"))
app.use("/res-scripts", express.static(__dirname + "/node_modules/bootstrap/dist/js"))
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"))
app.use("/popper", express.static(__dirname + "/node_modules/popper.js/dist/umd"))

app.use(sassMiddleware({
	src: path.join(__dirname, 'sass'),
	dest: path.join(__dirname, 'public')
}))

app.set("view engine", "ejs")

app.get('/', (request, response) => {

		response.render("index",{

		title : "Home Page",
		content : "Welcome to the MERN stack application"

	});

});

app.listen(config.port, (request, response) => {

		console.log(`Server listening at ${config.port}`)

});
