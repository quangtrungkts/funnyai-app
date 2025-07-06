const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.post('/api/joke', async (req, res) => {
  const { job, age, mood } = req.body;
  // Dummy joke for MVP
  const joke = `Here's a joke for a ${age}-year-old ${job} who's feeling ${mood}: Why don't programmers like nature? It has too many bugs!`;
  res.json({ joke });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});