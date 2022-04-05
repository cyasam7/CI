require("dotenv").config();

const config = {
    PORT: process.env.PORT,
    CORS: process.env.CORS,
    MONGO: {
        USER: process.env.MONGO_USER,
        PASSWORD: process.env.MONGO_PASSWORD,
        HOST: process.env.MONGO_HOST,
        DB: process.env.MONGO_DB,
    },
    SECRETO: process.env.SECRETO,
    MC_URL: process.env.MICROSERVICIO_URL,
};
module.exports = { config };
