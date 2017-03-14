// Require Node's http module and assign it to a variable
var http = require('http')

// Create a new server that just says "Hi!!" at every route
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end(
      '<style>' +
      'img {width: 150px;}' +
      '</style>' +
      '<h1>Greetings Traveler!</h1>' +
      '<a href="https://pixabay.com/en/aliens-comic-eye-stalks-tentacles-2029750/"><img src="https://cdn.pixabay.com/photo/2017/02/01/11/21/aliens-2029750_1280.png" alt="Alien"></a>' +
      '<div><a href="/random-joke">Random Joke</a></div>' +
      '<div><a href="/cuteness">Cuteness</a></div>'
    )
  } else if (request.url === '/random-joke') {
    var randNum = Math.random()
    if (randNum < 0.33) {
      response.end(
        '<h1>Random Knock-knock Joke!</h1>' +
        '<p>Why did the chicken cross the road?</p>' +
        '<p>To hunt somebody down.</p>' +
        '<p>Knock knock.</p>' +
        '<p>Who\'s there?</p>' +
        '<p>The chicken.</p>' +
        '<a href="https://ugc.kn3.net/i/760x/https://lh4.googleusercontent.com/-U9mFyX1w7XE/AAAAAAAAAAI/AAAAAAAABaY/abaS--Oun2Q/photo.jpg"><img src="https://ugc.kn3.net/i/760x/https://lh4.googleusercontent.com/-U9mFyX1w7XE/AAAAAAAAAAI/AAAAAAAABaY/abaS--Oun2Q/photo.jpg" alt="evil chicken"></a>' +
        '<div><a href="/">Homepage</a></div>'
      )
    } else if (randNum < 0.66) {
      response.end(
        '<h1>Random Knock-knock Joke!</h1>' +
        '<p>Knock knock.</p>' +
        '<p>Who\'s there?</p>' +
        '<p>Spell.</p>' +
        '<p>Spell who?</p>' +
        '<p>W-H-O</p>' +
        '<a href="/">Homepage</a>'
      )
    } else {
      response.end(
        '<h1>Random Knock-knock Joke!</h1>' +
        '<p>Knock knock.</p>' +
        '<p>Who\'s there?</p>' +
        '<p>Somebody who thinks you should fix your darn doorbell!</p>' +
        '<a href="/">Homepage</a>'
      )
    }
  } else if (request.url === '/cuteness') {
    response.end(
      '<style>' +
      'img {width: 250px;}' +
      '</style>' +
      '<h1>Cute Penguins!</h1>' +
      '<a href="http://www.slate.com/content/dam/slate/blogs/wild_things/2015/09/02/150902_WILD_CutePenguins.jpg.CROP.promo-xlarge2.jpg"><img src="http://www.slate.com/content/dam/slate/blogs/wild_things/2015/09/02/150902_WILD_CutePenguins.jpg.CROP.promo-xlarge2.jpg" alt="Cute Penguins"></a>' +
      '<div><a href="/">Homepage</a></div>'
    )
  } else {
    var reqUrl = request.url
    response.end(
      '<h1>404 Page Not Found!</h1>' +
      '<p>The URL ' + reqUrl + ' was not found.</p>' +
      '<p>Go back to the <a href="/">homepage</a></p>'
    )
  }
})

// Listen on port 8080, so that we can reach the app at
// localhost:8080
var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')
