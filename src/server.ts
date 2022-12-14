import express from 'express';
import colors from 'colors';
import routes from './routes/routerAgendaControllers';
import cors from 'cors';
const app: express.Application = express();

// https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/ 
// Documentação para estudar pacero
app.use(express.json());
app.use(cors)
app.use("/agenda", routes);

app.listen(3123, () => {
    console.clear();
    console.log(colors.yellow("Conectado na porta 8030"))
});