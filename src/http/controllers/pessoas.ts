import dbMysqlConnect from '../../database/dbMysql';
import IPERSONS from '../interface/pessoas';

class controllerPessoa {
    private conn = dbMysqlConnect.conexao();

    public async deletePessoa(id: Number) {
        let message: any

        return message;
    }
    public async editarPessoa(id: any, pessoa: IPERSONS) {
        let idPessoa = id;
        let message: any;
        try {
            await this.conn.table('tb_usuarios').returing('id').where({
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
            console.log(error.message);
        }


        return message.message;
    }
    public async inserirPessoa(pessoa: IPERSONS) {
        let message: any;
        try {
            await this.conn.table('tb_usuarios').returing('nome')
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
            console.log(error)
        }

        return message;

    }

    public async listarPessoas() {
        let pessoas: any = {};
        let alerta: String = '';
        let verificar: boolean = true;

        await this.conn.table('tb_usuarios')
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