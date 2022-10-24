import knex from 'knex';
import { dataBase } from '../config/app';
import colors from 'colors';


class dbMysqlConnect {

    private static connect: any;

    static conexao() {
        if (dbMysqlConnect.connect)
            return dbMysqlConnect.connect;
        console.log(colors.cyan(`Conectando em ${dataBase.host}`))

        dbMysqlConnect.connect = knex({
            client: dataBase.client,
            connection: {
                database: dataBase.dbname,
                server: dataBase.host,
                user: dataBase.username,
                password: dataBase.password,
                port: 3306,
            },
            pool: {
                min: 0,
                max: 7
            }

        });

        return dbMysqlConnect.connect;
    }
    // static async liberarConexao() {
    //     dbMysqlConnect.liberarConexao();
    // }
}
export default dbMysqlConnect;