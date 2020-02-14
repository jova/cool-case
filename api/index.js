const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ "status": "ok" });
});

app.listen(5000, () => console.log("listening at http://localhost:5000"));
