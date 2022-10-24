import dbMysqlConnect from '../../database/dbMysql';
import IPERSONS from '../interface/pessoas';

class controllerPessoa {
    protected conn = dbMysqlConnect.conexao();

    public async inserirPessoa(pessoa: IPERSONS) {
        let message: any;
        try {
            await this.conn.table('tb_usuarios')
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

                }).catch((error: any) => {
                    message = { message: error.message }

                });
            message = { message: 'Usuário(a) salvo(a)' }
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