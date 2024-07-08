const express = require('express');
const app = express();
const port = 3001;

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Import and use the auth routes
const authRouter = require('./routes/auth');
app.use('/api/auth', authRouter);

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
