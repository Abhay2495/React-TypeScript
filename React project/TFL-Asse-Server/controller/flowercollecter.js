const Flowers = require("../data/flowersData");

exports.getAllFlowers = (req, res) => {
    res.status(200).json({ Flowers });
};  