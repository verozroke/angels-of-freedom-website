const getAdmin = require("../handlers/admin/getAdmin");
const login = require("../handlers/admin/login");
const getAngel = require("../handlers/angel/getAngel");
const getDonate = require("../handlers/donate/getDonate");
const verify = require("../utils/adminVerify");
const register = require("../handlers/admin/register");
const updateAngel = require("../handlers/angel/updateAngel")
const updateDonate = require("../handlers/donate/updateDonate")


const router = require("express").Router();

router.get("/donate", [verify, getDonate]);
router.get("/angel", [verify, getAngel]);
router.put('/update/donate/:id', [verify, updateDonate])
router.put('/update/angel/:id', [verify, updateAngel])
router.post("/login", login);
router.get('/', [verify, getAdmin])
router.post("/register", register);



module.exports = router;
