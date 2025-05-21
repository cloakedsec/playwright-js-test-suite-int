const express = require('express');
const auditRoute = require('./routes/audit');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/audit', auditRoute);

app.listen(port, () => {
  console.log(`🩺 Web Health Inspector running at http://localhost:${port}`);
});
