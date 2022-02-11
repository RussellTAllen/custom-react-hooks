const express = require('express');
const request = require('request');

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/testing', (req, res) => {
    console.log('testing...')
})

// app.get('/drinks/random', async (req, res) => {
//     console.log('/drinks/random called')

// });

app.get('/drinks/random', (req, res) => {
  request(
    { url: 'http://www.thecocktaildb.com/api/json/v1/1/random.php' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on ${PORT}`));