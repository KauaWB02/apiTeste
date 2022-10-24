import { Router, Request, Response } from "express";
import controllers from '../http/controllers/pessoas';
import IPERSONS from "../http/interface/pessoas";

const routes: Router = Router();

const controller = new controllers();

routes.get('/list', async (req: Request, res: Response) => {
    let lista = await controller.listarPessoas();
    return res.json(lista)
});

routes.post('/create', async (req: Request, res: Response) => {
    const user:IPERSONS = req.body;
    let create = await controller.inserirPessoa(user)
    return res.json(create)
});



export default routes;