import app from "./server";

const mysql = require("mysql");



app.get("/test", function(req, res){
    var connection = mysql.createConnection({
        host: process.env.DATABASE_ENDPOINT,
        port: process.env.DATABASE_PORT,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: "carrot"
    });

    connection.connect();

    const getUserQuery = "SELECT * FROM User;";
    const getUserResult = connection.query(getUserQuery, function(err, rows, fields){
        if(err){
            console.log(err);
            res.send("회원정보 조회할 수 없음.")
        }else{
            res.send(rows)
        }
    });

    connection.end();
});

