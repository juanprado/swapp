const express = require('express');
const compression = require('compression');
const path = require('path');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8080;
const app = express();

const spaRoute = (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
};

app.use(compression());
app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(bodyParser.text({ type: 'application/x-ndjson' }));

// PATHS LEADING TO THE SPA
app.get('/', spaRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
