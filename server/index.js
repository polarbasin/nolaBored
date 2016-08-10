const express = require('express');
const app = express();

const port = process.env.PORT || 4657;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
})