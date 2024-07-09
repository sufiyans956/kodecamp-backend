const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
port=4000
const submissionRoutes = require('./src/routes/UserRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('views'));
app.use('/api', submissionRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './src/views/index.html'));
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });