import express from 'express';
import colors from 'colors';
import cors from 'cors';
import routes from './routes/routeControllers';

const app: express.Application = express();

app.use(express.json());
app.use(cors)
app.use("/agenda", routes);

app.listen(3123, () => {
    console.clear();
    console.log(colors.yellow("Conectado na porta 8030"))
});