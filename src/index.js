const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const axios = require("axios");

const db = require("./db");
const { config } = require("./config");
const { myModel } = require("./model");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());

db();

const router = express.Router();

app.use("/productos", router);

router.get("/", async (req, res) => {
    const data = await myModel.find();
    res.status(200).json(data);
});
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const data = await myModel.findById(id);
    res.status(200).json(data);
});
router.post("/", async (req, res) => {
    const data = req.body;
    const user = new myModel({ ...data });
    const myData = await user.save();

    res.status(200).json(myData);
});
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    await myModel.updateOne({ _id: id }, data);
    res.status(200).json("Se actualizo");
});
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    await myModel.deleteOne({ _id: id });
    res.status(200).json("se borro");
});

app.get("/mc", async (req, res, next) => {
    console.log(config.MC_URL);
    try {
        const { data } = await axios.get(`${config.MC_URL}consume`);
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        next();
    }
});
app.get("/consume", async (req, res) => {
    console.log(config.MC_URL);
    res.status(200).json({ message: "Hola desde el microservicio de productos" });
});

app.listen(config.PORT, () => {
    console.log(`Se inicio en puerto ${config.PORT}`);
});
