const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database operation to fetch user data ...
  if (!userData) {
    return res.status(404).send('User not found');
  }
  res.send(userData);
});

//The bug is that if the database operation fails or throws an error, the error is not handled gracefully, resulting in a server crash or an unexpected 500 error.  This is an uncommon error because developers often focus on the 404 case but overlook database errors.