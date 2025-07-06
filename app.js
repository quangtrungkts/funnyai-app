document.getElementById('jokeForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const job = e.target.job.value;
  const age = e.target.age.value;
  const mood = e.target.mood.value;

  const res = await fetch('/api/joke', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ job, age, mood })
  });
  const data = await res.json();
  document.getElementById('result').innerText = data.joke || 'No joke found 😢';
});