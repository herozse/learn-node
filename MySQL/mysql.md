## MySQL

### 1 基础
1. 关系型数据库：本质上是有多张表，通过关联彼此关系形成一个内部联系
2. 基本语法
```
USE database; 选择数据库

SELECT * 
-- FROM tables 
-- WHERE custom_id = 1 注释
-- ORDER BY first_name; 选择某张表

// 可以使用算数表达式, DISTINCT 可以重
SELECT DISTINCT points, points * (10 + 100) AS discout_factor FROM customs; 

// < <= > >= = != <>， 多条件搜索 AND OR, AND的优先级高于OR， NOT用于否定后面的条件
SELECT * FROM customs WHERE NOT price > 30 AND price <> 50
// IN运算符
SELECT * FROM customs WHERE price IN (12, 15, 18)
// BETWEEN <= 和 >=
SELECT * FROM customs WHERE price BETWEEN 1000 AND 3000
// LIKE运算符, %表示任意字符数， _表示一个字符 '____b'
SELECT * FROM customs WHERE last_name NOT LIKE '%ab%'
// REGEXP运算符，
SELECT * FROM customs WHERE last_name REGEXP "filed|^mac|name$"
  -- REGEXP "[gim]e[a-z]" --> ge ie me
// IS NULL 运算符
SELECT * FROM customs WHERE price IS NOT NULL；

// ORDER BY, DESC降序 ASC 升序
SELECT *, quantity * unit_price AS total_price from order_items 
WHERE order_id = 2
ORDER BY quantity * unit_price DESC

// LIMIT offset, num 多少偏移量后的多少条, LIMIT永远放在最后
SELECT * FROM customs LIMIT  pageSize * pageNo, pageSize 

// 内连接 (INNER) JOIN tables
// 多个相同的列时，需要标注是那一张表下面的哪一列
SELECT order_id, first_name, last_name, o.custom_id 
FROM orders o -- 用o别名替代order
JOIN customs 
ON o.custom_id = customs.custom_id
// 跨数据库连接
SELECT * FROM database.tables o JOIN database.tables ON ...
// 自连接
SELECT e.employee_id, e.first_name, m.first_name AS manager
FROM employee e JOIN employee m ON e.reports_to = m.employee_id
// 多连接
FROM .. JOIN .. ON .. JOIN .. ON .. JOIN ...
// 复合连接 无法用一列来识别， 复合主键：包含超过一列， 使用多个条件连接两个列
SELECT * FROM order_items oi JOIN order_items_notes oin 
  ON oi.order_id = oin.order_id
  AND oi.product_id = oin.product_id
// 隐式连接 -- 不建议使用
SELECT * FROM orders o, customs c WHERE o.custom_id = c.custom_id
// 外连接 ON ... 是有条件的，只会看到复合条件的数据，但是有的可能为null, 也想要全部看到
// LEFT JOIN会返回左边全部数据，RIGHT JOIN同理
// 多表外连接同理
FROM left LEFT (OUTER) JOIN right
// 自外连接
...
// USING
... JOIN ... USING (custom_id, order_id)
// 自然连接 --不建议使用 NATURAL JOIN
SELECT * FROM order p NATURAL JOIN customs c
// 交叉连接 -- CROSS JOIN, 型号表-颜色表等自由组合 n * n 的排列组合
SELECT * FROM　customs c, oreder o ORDE BY c.first_name
// 联合 | UNIONS 联合两个查询结果
SELECT * FROM ... WHERE ... UNIONS SELECT * FROM ...

```
3. 列属性
```
// 插入单行
INSERT INTO test VALUES (DEFAULT, "测试", 18, 168, NULL)
INSERT INTO customs (first_name, last_name, birth_date) VALUES (...), (...). (...)
// 多表插入
mysql内置函数： LAST_INSERT_ID() 返回最新插入的那个id
// 创建表复制, mysql会忽略行属性配置
CREATE TABLE orders_archived AS SELECT * FROM orders
// 更新行
UPDATE tables SET note = DEFAULT, hobby = age WHERE id IN (3, 5)
// 更新行使用子查询
UPDATE tables SET note = DEFAULT, hobby = age WHERE id = (SELECT custom_id FROM customs WHERE name = 'TALI')
// 删除行
DELETE FROM tabel WHERE id in (1,5)

```

4. 内置函数
```

/** 聚合函数 **/
MAX(column), MIN(), AVG(), COUNT(只运行非空值), COUNT(*), COUNT(DISTINCT id), SUM()

// 分组聚合 GROUP BY 
SELECT state, city, SUM(invoice_total) AS total_state FROM invoice i
JOIN client USING(client_id)
GROUP BY ... ORDER BY ...

// HAVING, GROUP BY 之前不能使用WHERE进行筛选
GROUP BY ... HAVING total > 500 WITH ROLLUP
// ROLLUP 用于聚合列

```

5. 编写复杂的SQL查询
```
// 子查询
// ALL 
// 因为SELECT invoice_total FROM invoices WHERE client_id = 3返回的是一列而不是单一值，所以加ALL
//  > (SELECT MAX(invoice_total) FROM invoice WHERE client_id = 3) 返回一个值，可以
SELECT * FROM invoices WHERE invoice_total > 
ALL (SELECT invoice_total FROM invoices WHERE client_id = 3)
// = ANY() 和 IN 是等效的

```