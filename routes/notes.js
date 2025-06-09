var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/', async (req, res) => {
request('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=622865d72d0b4597a52c17cca6f15f59', function (error, response, body) {
if (!error && response.statusCode == 200) {
const data = JSON.parse(body);
res.json(data);
}
});
})

module.exports = router;