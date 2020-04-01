const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota/Recurso
 * http://localhost:3333/users
 *
 */

/**
 * Métodos HTTP
 *
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação do back-end
 * PUT: Alterar uma informação do back-end
 * DELETE: Deletar uma informação do back-end
 */

/**
 * Tipos de Parâmetros:
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, páginação)
 * Route Params: Parâmetros utilizados para identiicar recursos.
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

app.listen(3333);
