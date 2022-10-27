import dbMysqlConnect from '../../database/dbMysql';
import IPERSONS from '../interface/pessoas';
import colors from 'colors';

class controllerPessoa {

    public async busca(caracteristicas: IPERSONS) {
        let nome = caracteristicas.nome;
        let telefone = caracteristicas.telefone;
        let conn = dbMysqlConnect.conexao();
        let message: any;
        // Select nome,telefone from tb_usuarios where nome,telefone like ´${carct.nome}%,´;

        try {
            await conn.table('tb_usuarios').select('nome', 'telefone')
                .whereiLike('nome', `%${nome}`)
                .andWhereILike('telefone', `%${telefone}`)
                .then((data: any) => {
                    console.log(data)
                }).catch((error: any) => {
                    message = error.message;
                })
        } catch (error) {
            console.log(colors.red(error))
        }

        return message;
    }
    // Fazer dele a tarde caso tenha nada para fazer..
    public async deletePessoa(id: any) {
        let message: any
        let conn = dbMysqlConnect.conexao();




        return message;
    }
    public async editarPessoa(id: any, pessoa: IPERSONS) {
        let idPessoa = id;
        let message: any;
        let conn = dbMysqlConnect.conexao();
        try {
            await conn.table('tb_usuarios').returing('id').where({
                id: idPessoa,
            }).update({ //Obrigatorio a a ter no json nome,sobre nome, telefone
                nome: pessoa.nome,
                sobre_Nome: pessoa.sobreNome,
                email: pessoa.email,
                senha: pessoa.senha,
                telefone: pessoa.telefone,
                pais: pessoa.pais,
                sexo: pessoa.sexo,
                altura: pessoa.altura,
                peso: pessoa.peso,
                descricao: pessoa.descricao
            }).then((data: any) => {
                message = { message: 'Usuário(a)' + data + 'atualizado(a)' }
            }).catch((error: any) => {
                message = { message: error.message }
            })
        } catch (error) {
            console.log(colors.red(error.message));
        }


        return message.message;
    }
    public async inserirPessoa(pessoa: IPERSONS) {
        let message: any;
        let conn = dbMysqlConnect.conexao();
        try {
            await conn.table('tb_usuarios').returing('nome')
                .insert({
                    nome: pessoa.nome,
                    sobre_Nome: pessoa.sobreNome,
                    email: pessoa.email,
                    senha: pessoa.senha,
                    telefone: pessoa.telefone,
                    pais: pessoa.pais,
                    sexo: pessoa.sexo,
                    altura: pessoa.altura,
                    peso: pessoa.peso,
                    descricao: pessoa.descricao
                }).then((data: any) => {
                    message = { message: 'Usuário(a)' + data + 'salvo(a)' }
                }).catch((error: any) => {
                    message = { message: error.message }

                });
        } catch (error) {
            console.log(colors.red(error))
        }

        return message;

    }

    public async listarPessoas() {
        let conn = dbMysqlConnect.conexao();
        let pessoas: any = {};
        let alerta: String = '';
        let verificar: boolean = true;

        await conn.table('tb_usuarios')
            .select()
            .then((data: any) => {
                pessoas = data;
            }).catch((error: any) => {

                verificar = false;
                alerta = error.message;

            });
        return verificar ? pessoas : alerta;
    }
}

export default controllerPessoa;