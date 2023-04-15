const donate = require("../handlers/donate/donate")

const router = require("express").Router();

router.post('/donate', donate)

module.exports = router;
