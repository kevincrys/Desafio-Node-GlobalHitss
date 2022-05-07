
async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://bq12ypsqu80imq2k:be57fe3ry2j8v7my@vkh7buea61avxg07.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/sutegx7qrlpqgpcs");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}



async function selectUsers(login){
var sql = 'SELECT * FROM users WHERE users.Login=?'
    const conn = await connect();
        const [rows] = await conn.query(sql, [login], function(err, rows, fields) {});
    return rows;

}

async function insertUsers(customer){
    const conn = await connect();
    const sql = 'INSERT INTO Users(Login,Senha,Email) VALUES (?,?,?);';;
    const values = [customer.Login, customer.Senha, customer.Email];
    return await conn.query(sql, values);
}

module.exports = {selectUsers,insertUsers}
