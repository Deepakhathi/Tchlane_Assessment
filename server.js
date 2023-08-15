const express = require('express');
const { spawn } = require('child_process');
const app = express();
const port = 3000;

app.get('/api/predictions', (req, res) => {
  const pythonProcess = spawn('python', ['prediction_script.py']);
  let data = '';

  pythonProcess.stdout.on('data', (chunk) => {
    data += chunk;
  });

  pythonProcess.on('close', (code) => {
    if (code === 0) {
      const predictions = JSON.parse(data);
      res.json(predictions);
    } else {
      res.status(500).json({ error: 'Failed to generate predictions' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
