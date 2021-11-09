import express from 'express';

import apiRoutes from './routes';

import './shared/typeorm'
import 'reflect-metadata';

const app = express();
app.use(express.json());
app.use(apiRoutes);

app.listen(3000, () => console.log('Serve Rodando'));
