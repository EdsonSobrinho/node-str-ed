'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send('<html><head><meta charset="UTF-8"/><title>Document</title></head><body> <form action="salvar_dados.php" method="post"><input type="text" placeholder="Loja do Edson"><br/></form></body></html>'
  });

module.exports = router;
