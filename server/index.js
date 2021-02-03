require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query(`select 'successfully connected' as "message"`)
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

//  SIGN UP API POST REQUEST THAT ADDS USER INFO TO DB

app.post('/api/signUp/', (req, res, next) => {
  const sql = `
  INSERT INTO "users" ("name", "password", "icon")
  VALUES                  ($1, $2, $3)
  RETURNING *;
  `;
  const params = [req.body.name, req.body.password, req.body.icon,];
  
  for (let i = 0; i < params.length; i ++) {
    if (!params[i]) {
      return res.status(400).json({ error: 'all signup input forms must be filled' });
    }
  }
  db.query(sql, params)
    .then(result => {
      const row = result.rows[0];
      res.status(201).json(row);
    });
});

//  SEARCH DATABASE FOR EXISTING EMAIL AND PASSWORD API GET REQUEST

app.get('/api/login/:name/:password', (req, res, next) => {
  const name = req.params.name;
  const password = req.params.password;
  const sql = `
  SELECT * FROM "users"
  WHERE name = $1 
  AND password = $2;
  `;
  const params = [name, password];
  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        return res.status(400).json({ message: `No user information contains: ${name} or ${password}` });
      } else {
        return res.status(200).json(result.rows);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});