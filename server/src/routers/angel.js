const angel = require("../handlers/angel/angel");

const router = require("express").Router();

router.post("/angel", angel);

module.exports = router;
