var twitter = require('ntwitter');

var twit = new twitter({
  consumer_key: "ZCqOVxJYS42l6CgwVdKw",
  consumer_secret: "wqlmHJv8COV0HSK0Wxo2iVI6NDcyR70jzGBdEUB87k",
  access_token_key: '17718540-AvPKN1mJrSLyuPwSTbKcbekxtfAsdjZzBITBDSAec',
  access_token_secret: 'F445boeW4oUzkGExa1tLJDF2ADjZFt4czukJmm3sc'
});


twit.stream('statuses/sample', function(stream) {
  stream.on('data', function (data) {
    console.log(data);
  });
});

/*
twit.stream('statuses/filter', {'locations':'-122.75,36.8,-121.75,37.8,-74,40,-73,41'}, function(stream) {
  stream.on('data', function (data) {
    console.log(data);
  });
});
*/