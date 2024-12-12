const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // ...database operation...
    if (!userData) {
      return res.status(404).send('User not found');
    }
    res.send(userData);
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).send('Internal Server Error');
  }
});