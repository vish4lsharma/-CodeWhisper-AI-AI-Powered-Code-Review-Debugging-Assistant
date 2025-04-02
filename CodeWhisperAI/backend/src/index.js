const express = require('express');
const cors = require('cors');
const aiService = require('./aiService');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/review', (req, res) => {
  const { code, language } = req.body;
  const review = aiService.reviewCode(code, language);
  res.json(review);
});

app.post('/api/debug', (req, res) => {
  const { code, language } = req.body;
  const debug = aiService.debugCode(code, language);
  res.json(debug);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});