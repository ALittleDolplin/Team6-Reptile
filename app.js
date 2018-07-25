var express = require('express');
var postcontrol = require('./model/postctrl.js');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var postControl = new postcontrol();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 5000);

app.get('/list/:page', function (req, res) {
  postControl.getLJList(req).then((list) => {
    res.send(list);
  });
})

app.get('/fang/:page', function (req, res) {
  postControl.
    getLJList(req).
    then((list) => {
      return list;
    })
    .then((list) => {
      let fangPromise = [];
      list.forEach((element) => {
        fangPromise.push(postControl.getLJFang(element.id));
      });
      return Promise.all(fangPromise);
    })
    .then(list => {
      res.send(list);
    });
});