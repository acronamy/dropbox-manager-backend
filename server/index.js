const path = require('path');
const express = require('express');
const app = express();
const cons = require('consolidate');
var Dropbox = require("dropbox");

const dist =  path.join(__dirname, 'editor')

app.use('/', express.static(dist))
// view engine setup
app.engine('html', cons.swig)
app.set('views', dist);
app.set('view engine', 'html');

var dbx = new Dropbox({ accessToken: '9x3oXu1QUfAAAAAAAAAQhpuxPKAV8iQfdN3ZljlNfCaf9WCY2TBxWly8WymlraLV' });

function loadDropboxFolderContent(path){
  app.get('/data/dropbox', function(req,res){
    dbx.filesListFolder({path: path}).then(function(content){
      res.json(content.entries.filter(folder=>folder['.tag'] === 'folder'))
    }) 
  })
}
loadDropboxFolderContent('/website');


//Feeds
app.get('/data/collections', function(req,res){
  res.json([
    {name:'Foo',id:1,contents:[1,3,5,2,8]}
  ])
})


//ng
app.get('*', function (req, res) {
  res.render('index')
})


app.listen(4200);