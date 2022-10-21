import express from 'express';
import { routesController } from './routes/routeControllers';



const app = express();

app.use("pessoas/",routesController)

app.listen(3030,()=>console.log("Servidor iniciado na porta 3030"))