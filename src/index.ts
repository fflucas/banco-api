import 'reflect-metadata';
import './database';

import * as express from 'express';
import * as bodyParser from 'body-parser';
import routes from './routes/index';

// create express app
const app = express();
app.use(bodyParser.json());

// rotas da aplicação
app.use('/api', routes);

// start express server
app.listen(3000, () => {
  console.log('Express server executando na porta 3000');
});
