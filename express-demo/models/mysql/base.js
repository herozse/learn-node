const pool = require("./index");

class DB {
  constructor(props) {
    this.props = props;
  }

  useSQL(...args) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          reject(err);
        } else {
          console.log("数据库连接成功");

          const cb = args[args.length - 1];
          if (cb && cb instanceof Function) args.pop();

          connection.query(...args, (e, result, filed) => {
            if (e) {
              console.log(e);
              reject(e);
            } else {
              resolve({
                code: 200,
                data: result,
                msg: "操作成功",
              });
              cb && cb instanceof Function && cb(e, result);
            }

            connection.release();
          });
        }
      });
    });
  }
}

module.exports = new DB({});
