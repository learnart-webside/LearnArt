const express = require('express');
const app = express();
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);
 
router.get('/dashboard/ShapesMania', ensureAuthenticated, (req, res) =>
  res.render('ShapesMania', {
    user: req.user
  })
);

router.get('/dashboard/CurvedTreats', ensureAuthenticated, (req, res) =>
  res.render('CurvedTreats', {
    user: req.user
  })
);

router.get('/dashboard/SpaceAdventures', ensureAuthenticated, (req, res) =>
  res.render('SpaceAdventures', {
    user: req.user
  })
);

router.get('/dashboard/HouseholdChattel', ensureAuthenticated, (req, res) =>
  res.render('HouseholdChattel', {
    user: req.user
  })
);

router.get('/dashboard/MovableThings', ensureAuthenticated, (req, res) =>
  res.render('MovableThings', {
    user: req.user
  })
);

router.get('/drawLine', ensureAuthenticated, (req, res) => 
  res.sendFile('drawLine.html', {root: __dirname})
);

router.get('/drawTriangle', ensureAuthenticated, (req, res) => 
  res.sendFile('drawTriangle.html', {root: __dirname})
);

router.get('/drawSquare', ensureAuthenticated, (req, res) => 
  res.sendFile('drawSquare.html', {root: __dirname})
);

router.get('/drawCircle', ensureAuthenticated, (req, res) => 
  res.sendFile('drawCircle.html', {root: __dirname})
);

router.get('/drawDiamond', ensureAuthenticated, (req, res) => 
  res.sendFile('drawDiamond.html', {root: __dirname})
);

router.get('/drawHexagon', ensureAuthenticated, (req, res) => 
  res.sendFile('drawHexagon.html', {root: __dirname})
);

router.get('/drawCookie', ensureAuthenticated, (req, res) => 
  res.sendFile('drawCookie.html', {root: __dirname})
);

router.get('/drawLightbulb', ensureAuthenticated, (req, res) => 
  res.sendFile('drawLightbulb.html', {root: __dirname})
);

router.get('/drawBasketball', ensureAuthenticated, (req, res) => 
  res.sendFile('drawBasketball.html', {root: __dirname})
);

router.get('/drawClock', ensureAuthenticated, (req, res) => 
  res.sendFile('drawClock.html', {root: __dirname})
);

router.get('/drawCake', ensureAuthenticated, (req, res) => 
  res.sendFile('drawCake.html', {root: __dirname})
);

router.get('/drawDonut', ensureAuthenticated, (req, res) => 
  res.sendFile('drawDonut.html', {root: __dirname})
);

router.get('/drawStar', ensureAuthenticated, (req, res) => 
  res.sendFile('drawStar.html', {root: __dirname})
);

router.get('/drawSun', ensureAuthenticated, (req, res) => 
  res.sendFile('drawSun.html', {root: __dirname})
);

router.get('/drawMoon', ensureAuthenticated, (req, res) => 
  res.sendFile('drawMoon.html', {root: __dirname})
);

router.get('/drawCloud', ensureAuthenticated, (req, res) => 
  res.sendFile('drawCloud.html', {root: __dirname})
);

router.get('/drawRainbow', ensureAuthenticated, (req, res) => 
  res.sendFile('drawRainbow.html', {root: __dirname})
);

router.get('/drawRain', ensureAuthenticated, (req, res) => 
  res.sendFile('drawRain.html', {root: __dirname})
);

router.get('/drawHouse', ensureAuthenticated, (req, res) => 
  res.sendFile('drawHouse.html', {root: __dirname})
);

router.get('/drawCeilingFan', ensureAuthenticated, (req, res) => 
  res.sendFile('drawCeilingFan.html', {root: __dirname})
);


router.get('/drawCandle', ensureAuthenticated, (req, res) => 
  res.sendFile('drawCandle.html', {root: __dirname})
);


router.get('/drawCup', ensureAuthenticated, (req, res) => 
  res.sendFile('drawCup.html', {root: __dirname})
);


router.get('/drawEyeGlasses', ensureAuthenticated, (req, res) => 
  res.sendFile('drawEyeGlasses.html', {root: __dirname})
);


router.get('/drawComputer', ensureAuthenticated, (req, res) => 
  res.sendFile('drawComputer.html', {root: __dirname})
);

router.get('/drawBicycle', ensureAuthenticated, (req, res) => 
  res.sendFile('drawBicycle.html', {root: __dirname})
);

router.get('/drawTrain', ensureAuthenticated, (req, res) => 
  res.sendFile('drawTrain.html', {root: __dirname})
);

router.get('/drawHotAirBalloon', ensureAuthenticated, (req, res) => 
  res.sendFile('drawHotAirBalloon.html', {root: __dirname})
);

router.get('/drawCat', ensureAuthenticated, (req, res) => 
  res.sendFile('drawCat.html', {root: __dirname})
);

router.get('/drawFish', ensureAuthenticated, (req, res) => 
  res.sendFile('drawFish.html', {root: __dirname})
);

router.get('/drawElephant', ensureAuthenticated, (req, res) => 
  res.sendFile('drawElephant.html', {root: __dirname})
);

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

router.get('/sketch.js',function(req, res) {
  res.sendFile(__dirname + '/sketch.js');
});

router.get('/loaders.css',function(req, res) {
  res.sendFile(__dirname + '/loaders.css');
});

router.get('/loaders.css.js',function(req, res) {
  res.sendFile(__dirname + '/loaders.css.js');
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

router.get('/data/TheMonaLisa.bin',function(req, res) {
  res.sendFile(__dirname + '/data/TheMonaLisa.bin');
});

router.get('/data/bulldozer.bin',function(req, res) {
  res.sendFile(__dirname + '/data/bulldozer.bin');
});

router.get('/data/1ShapesMania/1line.bin',function(req, res) {
  res.sendFile(__dirname + '/data/1ShapesMania/1line.bin');
});

router.get('/data/1ShapesMania/2triangle.bin',function(req, res) {
  res.sendFile(__dirname + '/data/1ShapesMania/2triangle.bin');
});

router.get('/data/1ShapesMania/3square.bin',function(req, res) {
  res.sendFile(__dirname + '/data/1ShapesMania/3square.bin');
});

router.get('/data/1ShapesMania/4circle.bin',function(req, res) {
  res.sendFile(__dirname + '/data/1ShapesMania/4circle.bin');
});

router.get('/data/1ShapesMania/5diamond.bin',function(req, res) {
  res.sendFile(__dirname + '/data/1ShapesMania/5diamond.bin');
});

router.get('/data/1ShapesMania/6hexagon.bin',function(req, res) {
  res.sendFile(__dirname + '/data/1ShapesMania/6hexagon.bin');
});

router.get('/data/2CurvedTreats/1cookie.bin',function(req, res) {
  res.sendFile(__dirname + '/data/2CurvedTreats/1cookie.bin');
});

router.get('/data/2CurvedTreats/2lightbulb.bin',function(req, res) {
  res.sendFile(__dirname + '/data/2CurvedTreats/2lightbulb.bin');
});

router.get('/data/2CurvedTreats/3basketball.bin',function(req, res) {
  res.sendFile(__dirname + '/data/2CurvedTreats/3basketball.bin');
});

router.get('/data/2CurvedTreats/4clock.bin',function(req, res) {
  res.sendFile(__dirname + '/data/2CurvedTreats/4clock.bin');
});

router.get('/data/2CurvedTreats/5cake.bin',function(req, res) {
  res.sendFile(__dirname + '/data/2CurvedTreats/5cake.bin');
});

router.get('/data/2CurvedTreats/6donut.bin',function(req, res) {
  res.sendFile(__dirname + '/data/2CurvedTreats/6donut.bin');
});

router.get('/data/3SpaceAdventures/1star.bin',function(req, res) {
  res.sendFile(__dirname + '/data/3SpaceAdventures/1star.bin');
});

router.get('/data/3SpaceAdventures/2sun.bin',function(req, res) {
  res.sendFile(__dirname + '/data/3SpaceAdventures/2sun.bin');
});

router.get('/data/3SpaceAdventures/3moon.bin',function(req, res) {
  res.sendFile(__dirname + '/data/3SpaceAdventures/3moon.bin');
});

router.get('/data/3SpaceAdventures/4cloud.bin',function(req, res) {
  res.sendFile(__dirname + '/data/3SpaceAdventures/4cloud.bin');
});

router.get('/data/3SpaceAdventures/5rainbow.bin',function(req, res) {
  res.sendFile(__dirname + '/data/3SpaceAdventures/5rainbow.bin');
});

router.get('/data/3SpaceAdventures/6rain.bin',function(req, res) {
  res.sendFile(__dirname + '/data/3SpaceAdventures/6rain.bin');
});

router.get('/data/4HouseholdChattel/1house.bin',function(req, res) {
  res.sendFile(__dirname + '/data/4HouseholdChattel/1house.bin');
});

router.get('/data/4HouseholdChattel/2ceilingFan.bin',function(req, res) {
  res.sendFile(__dirname + '/data/4HouseholdChattel/2ceilingFan.bin');
});

router.get('/data/4HouseholdChattel/3candle.bin',function(req, res) {
  res.sendFile(__dirname + '/data/4HouseholdChattel/3candle.bin');
});

router.get('/data/4HouseholdChattel/4cup.bin',function(req, res) {
  res.sendFile(__dirname + '/data/4HouseholdChattel/4cup.bin');
});

router.get('/data/4HouseholdChattel/5eyeglasses.bin',function(req, res) {
  res.sendFile(__dirname + '/data/4HouseholdChattel/5eyeglasses.bin');
});

router.get('/data/4HouseholdChattel/6computer.bin',function(req, res) {
  res.sendFile(__dirname + '/data/4HouseholdChattel/6computer.bin');
});

router.get('/data/5MovableThings/1bicycle.bin',function(req, res) {
  res.sendFile(__dirname + '/data/5MovableThings/1bicycle.bin');
});

router.get('/data/5MovableThings/2train.bin',function(req, res) {
  res.sendFile(__dirname + '/data/5MovableThings/2train.bin');
});

router.get('/data/5MovableThings/3HotAirBalloon.bin',function(req, res) {
  res.sendFile(__dirname + '/data/5MovableThings/3HotAirBalloon.bin');
});

router.get('/data/5MovableThings/4cat.bin',function(req, res) {
  res.sendFile(__dirname + '/data/5MovableThings/4cat.bin');
});

router.get('/data/5MovableThings/5fish.bin',function(req, res) {
  res.sendFile(__dirname + '/data/5MovableThings/5fish.bin');
});

router.get('/data/5MovableThings/6Elephant.bin',function(req, res) {
  res.sendFile(__dirname + '/data/5MovableThings/6Elephant.bin');
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

router.get('/images/fan.png',function(req, res) {
  res.sendFile(__dirname + '/images/fan.png');
});

router.get('/images/candle.png',function(req, res) {
  res.sendFile(__dirname + '/images/candle.png');
});

router.get('/images/train.png',function(req, res) {
  res.sendFile(__dirname + '/images/train.png');
});

router.get('/images/ballon.png',function(req, res) {
  res.sendFile(__dirname + '/images/ballon.png');
});

router.get('/images/elephant.png',function(req, res) {
  res.sendFile(__dirname + '/images/elephant.png');
});

module.exports = router;