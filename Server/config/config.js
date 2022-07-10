const DEFAULT_PORT = 4000;

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Library API",
            version: "1.0.0",
            description:
                "This is a simple Library CRUD API.",
        },
        servers: [
            {
                url: process.env.APP_API_SERVER_URL,
            },
        ],
    },
    apis: ["./routes/*.js"],
};
module.exports = {options, DEFAULT_PORT};