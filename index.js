var express = require('express');
var app = express();

//PORT
var port = process.env.PORT || 3000;

// defining a data
var courses = [
  {
    id: 1,
    name: 'Javascript'
  },
  {
    id: 2,
    name: 'React'
  },
  {
    id: 3,
    name: 'Express',
  }
]

// GET METHOD
app.get('/', function(req, res) {  // send property on response ---> sending back to the client
  res.send('Hello World!!!');
});

app.get('/api/courses', function(req, res) {
  res.send(courses);
});

app.get('/api/courses/:id', function(req, res) {
  // to read the parameters --> req.params.id
  // res.send(req.params.id);
  // res.send(req.query);

  // find a specific course
  var course = courses.find(c => c.id === parseInt(req.params.id));
  if(!course) {
    res.status(404).send("This course was not found");
  };
    res.send(course);
});


// multiple params
app.get('/api/posts/:year/:month', function(req, res) {
  res.send(req.params);
})

// LISTEN METHOD
app.listen(port, () => console.log(`Listing to the port: ${port}`));
