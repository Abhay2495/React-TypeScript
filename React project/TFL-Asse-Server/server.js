const express = require("express");
const cors = require("cors");
const flowerRoute = require("./routes/flowerRoute")

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api",flowerRoute);


const PORT = 8000;
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});