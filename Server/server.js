const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const cors = require("cors");
const morgan = require("morgan");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const tasksRouter = require("./routes/tasks");
const {options, DEFAULT_PORT} = require("./config/config");

const adapter = new FileSync("db.json");
const db = low(adapter);

const app = express();

app.db = db;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const specs = swaggerJsDoc(options);
app.use(
	"/api",
	swaggerUI.serve,
	swaggerUI.setup(specs, { explorer: true })
);

app.use("/tasks", tasksRouter);

const port = process.env.PORT || DEFAULT_PORT;

app.listen(port, () => console.log(`Server is running on port ${port}`));
