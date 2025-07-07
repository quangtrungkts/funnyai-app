const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(express.json());

app.post('/api/joke', (req, res) => {
  const { job, age, mood } = req.body;
  const joke = `Here's a joke for a ${age}-year-old ${job} who's feeling ${mood}: Why don't scientists trust atoms? Because they make up everything!`;
  res.json({ joke });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`FunnyAI server running on port ${PORT}`);
});