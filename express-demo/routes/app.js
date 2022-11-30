var express = require("express");
var router = express.Router();
const userController = require("../controllers/user");
const db = require("../models/mysql/base");
// 获取用户信息
router.get("/get_user", userController.showUser);

router.get("/", async (req, res, next) => {
  let sql = "select * from user";
  const result = await db.useSQL(sql)
  res.send(result);
});

router.post("/add_user", async (req, res, next) => {
  console.log(req.body);
  const query = req.body;
  if (!query.name) {
    res.send({
      code: 0,
      data: null,
      msg: "姓名不能为空！",
    });
    return
  }

   
  let sql = `INSERT INTO user (${Object.keys(query).toString()}) VALUES ? `;
  const values = Object.values(query);
  const result = await db.useSQL(sql, [[values]]);
  console.log(result);

  res.send({
    code: 200,
    data: [query],
    msg: "操作成功",
  });
});

module.exports = router;
