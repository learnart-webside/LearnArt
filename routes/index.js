const express = require('express');
const app = express();
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);
 
router.get('/dashboard/shapes', ensureAuthenticated, (req, res) =>
  res.render('shapes', {
    user: req.user
  })
);

router.get('/drawing', ensureAuthenticated, (req, res) => 
  res.sendFile('drawing.html', {root: __dirname}));

router.get('/lib/main.css',function(req, res) {
  res.sendFile(__dirname + '/lib/main.css');
});

router.get('/lib/vanillatoasts.css',function(req, res) {
  res.sendFile(__dirname + '/lib/vanillatoasts.css');
});

router.get('/lib/vanillatoasts.js',function(req, res) {
  res.sendFile(__dirname + '/lib/vanillatoasts.js');
});

router.get('/lib/preparedData.js',function(req, res) {
  res.sendFile(__dirname + '/lib/preparedData.js');
});

router.get('/lib/trainingAndTesting.js',function(req, res) {
  res.sendFile(__dirname + '/lib/trainingAndTesting.js');
});

router.get('/lib/codeToViewDataset.js',function(req, res) {
  res.sendFile(__dirname + '/lib/codeToViewDataset.js');
});

router.get('/lib/nn.js',function(req, res) {
  res.sendFile(__dirname + '/lib/nn.js');
});

router.get('/lib/matrix.js',function(req, res) {
  res.sendFile(__dirname + '/lib/matrix.js');
});

router.get('/lib/preload.js',function(req, res) {
  res.sendFile(__dirname + '/lib/preload.js');
});

router.get('/sketch.js',function(req, res) {
  res.sendFile(__dirname + '/sketch.js');
});

router.get('/p5/p5.speech.js',function(req, res) {
  res.sendFile(__dirname + '/p5/p5.speech.js');
});

router.get('/p5/addons/p5.dom.min.js',function(req, res) {
  res.sendFile(__dirname + '/p5/addons/p5.dom.min.js');
});

router.get('/p5/p5.scribble.js',function(req, res) {
  res.sendFile(__dirname + '/p5/p5.scribble.js');
});

router.get('/p5/p5.min.js',function(req, res) {
  res.sendFile(__dirname + '/p5/p5.min.js');
});

router.get('/data/Module1/1line.bin',function(req, res) {
  res.sendFile(__dirname + '/data/Module1/1line.bin');
});

router.get('/data/Module1/TheMonaLisa.bin',function(req, res) {
  res.sendFile(__dirname + '/data/Module1/TheMonaLisa.bin');
});

router.get('/data/Module1/bulldozer.bin',function(req, res) {
  res.sendFile(__dirname + '/data/Module1/bulldozer.bin');
});

router.get('/images/green-tick.png',function(req, res) {
  res.sendFile(__dirname + '/images/green-tick.png');
});

router.get('/images/Wrong.png',function(req, res) {
  res.sendFile(__dirname + '/images/Wrong.png');
});

router.get('/images/art2.png',function(req, res) {
  res.sendFile(__dirname + '/images/art2.png');
});

router.get('/images/triangle.png',function(req, res) {
  res.sendFile(__dirname + '/images/triangle.png');
});

router.get('/images/hexagon.png',function(req, res) {
  res.sendFile(__dirname + '/images/hexagon.png');
});

module.exports = router;