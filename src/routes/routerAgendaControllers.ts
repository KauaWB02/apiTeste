import { Router, Request, Response } from "express";
import controllers from '../http/controllers/pessoas';
import IPERSONS from "../http/interface/pessoas";

const routes: Router = Router();

const controller = new controllers();

routes.get('/list', async (req: Request, res: Response) => {
    let lista: IPERSONS = await controller.listarPessoas();
    return res.json(lista)
});

routes.post('/create', async (req: Request, res: Response) => {
    const user: IPERSONS = req.body;
    let create = await controller.inserirPessoa(user)
    return res.json(create)
});

routes.put('/update:id', async (req: Request, res: Response) => {
    const id = req.params;
    const pessoa = req.body;
    let create = await controller.editarPessoa(id, pessoa);
    return res.json(create)
});
//Vai recever um json que vai ter que ser tratato na parte do front depois mandado para a API.
//Mesclar todos os dadaos possiveis nome,email,telefone
routes.post('/google', async (req: Request, res: Response) => {
    const user: IPERSONS = req.body;
    let create = await controller.inserirPessoa(user)
    return res.json(create)
});

export default routes;