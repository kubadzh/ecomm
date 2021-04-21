const express = require("express");
const router = express.Router();


const {getAllProducts, getProductById} = require('../controller/productControllers');

//GET all products from db
router.get("/", getAllProducts);

router.get("/:id", getProductById);

module.exports = router;
