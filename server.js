const express = require('express');
const cors = require('cors');
const { appendToMemberExpression } = require('@babel/types');
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'thanhtiendepzaiqua',
  });
});

app.listen(8080, () => console.log('Express API is running on http://localhost:8080/login'));
