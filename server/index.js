const express = require('express');
const db = require('./models');
const cors = require('cors');


const app = express();
app.use(express.json());
const ProductRouter = require('./routes/product');

app.use(cors());
app.use('/products', ProductRouter);

db.sequelize.sync().then(() => {
  app.listen(process.env.PORT || 3333, () => {
    console.log('Servidor rodando na porta ' + (process.env.PORT || 3333));
  });
}).catch(error => {
  console.error('Erro ao sincronizar o banco de dados:', error);
});
