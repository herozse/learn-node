const express = require("express");
const cors = require('cors')

const app = express();

// 中间件
app.use(cors());
app.use(express.json());

require("./routes/admin")(app);
require("./plugins/mysql")(app);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
