const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/market', function(req,res){
  var request = require('request');
  var url = 'http://apis.data.go.kr/6260000/BusanLifeInfoService/getLifeInfo?';
  var servicekey = 'GY6zNUB%2Blly%2BkxhUyYq6hvAlsQ7ibSOZOHN9ON2IknCDQSyPL8Qm%2Bc4cWseUVpi1kFXOAnVMFjfa9CbsobnVjA%3D%3D';
  var resultType = req.query.resultType;
  var pageNo = req.query.pageNo;

  url = url + "&servicekey=" + servicekey + "&resultType=" + resultType +"&pageNo=" + pageNo;
  
  var options = {
    'method': 'GET',
    'url': url
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.send(response.body);
  });
})

app.get('/problemget', function(req,res){
  var request = require('request');
  var url = 'https://solved.ac/api/v3/search/problem?query=';
  var erase = "";
  var ids = req.query.values;
  for (let i = 0; i<ids.length; i++) {
    erase = erase + "-solved_by%3A" + ids[i] + "%20";
  }
  var tier = req.query.tier;
  var sort = '&sort=random&limit=1';

  url = url + erase + "*" + tier + sort;
  
  var options = {
    'method': 'GET',
    'url': url
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.send(response.body);
  });
})

app.get('/compareuser1', function(req,res){
  var request = require('request');
  var url = 'https://solved.ac/api/v3/user/show?handle=';
  var id = req.query.user1;

  url = url + id
  
  var options = {
    'method': 'GET',
    'url': url
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.send(response.body);
  });
})

app.get('/compareuserpie1', function(req,res){
  var request = require('request');
  var url = 'https://solved.ac/api/v3/user/problem_stats?handle=';
  var id = req.query.user1;

  url = url + id
  
  var options = {
    'method': 'GET',
    'url': url
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.send(response.body);
  });
})

app.get('/compareuser2', function(req,res){
  var request = require('request');
  var url = 'https://solved.ac/api/v3/user/show?handle=';
  var id = req.query.user2;

  url = url + id
  
  var options = {
    'method': 'GET',
    'url': url
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.send(response.body);
  });
})

app.get('/compareuserpie2', function(req,res){
  var request = require('request');
  var url = 'https://solved.ac/api/v3/user/problem_stats?handle=';
  var id = req.query.user2;

  url = url + id
  
  var options = {
    'method': 'GET',
    'url': url
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.send(response.body);
  });
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))