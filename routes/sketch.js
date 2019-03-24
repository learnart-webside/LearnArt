const len = 784;
const total_data = 2000;

const FIND = 0;
const MONALISA = 1;
const BULLDOZER = 2;

let finds_data;
let monalisa_data;
let bulldozer_data;

let finds = {};
let monalisa = {};
let bulldozer = {};

let shownToasts = [];
let toastHeight = window.innerHeight / 12;

let nn;

let text;

function preload(art) {

  monalisa_data = loadBytes('/data/TheMonaLisa.bin');
  bulldozer_data = loadBytes('/data/bulldozer.bin');    

  // Module 1
  if(art == 'LINE') {
    console.log(art);
    text = art;
    finds_data = loadBytes('/data/1ShapesMania/1line.bin');
  }
  else if(art == 'TRIANGLE') {
    console.log(art);
    text = art;
    finds_data = loadBytes('/data/1ShapesMania/2triangle.bin');
  }
  else if(art == 'SQUARE') {
    console.log(art);
    text = art;
    finds_data = loadBytes('/data/1ShapesMania/3square.bin');
  }
  else if(art == 'CIRCLE') {
    console.log(art);
    text = art;
    finds_data = loadBytes('/data/1ShapesMania/4circle.bin');
  }
  else if(art == 'DIAMOND') {
      console.log(art);
      text = art;
      finds_data = loadBytes('/data/1ShapesMania/5diamond.bin');  
  }
  else if(art == 'HEXAGON') {
    console.log(art);
    text = art;
    finds_data = loadBytes('/data/1ShapesMania/6hexagon.bin');
  }
  //Module 2
  else if(art == 'COOKIE') {
    console.log(art);
    text = art;
    finds_data = loadBytes('/data/2CurvedTreats/1cookie.bin');
  }
  else if(art == 'LIGHT BULB') {
    console.log(art);
    text = art;
    finds_data = loadBytes('/data/2CurvedTreats/2lightbulb.bin');
  }
  else if(art == 'BASKETBALL') {
    console.log(art);
    text = art;
    finds_data = loadBytes('/data/2CurvedTreats/3basketball.bin');
  }
  else if(art == 'CLOCK') {
    console.log(art);
    text = art;
    finds_data = loadBytes('/data/2CurvedTreats/4clock.bin');
  }
  else if(art == 'CAKE') {
      console.log(art);
      text = art;
      finds_data = loadBytes('/data/2CurvedTreats/5cake.bin');  
  }
  else if(art == 'DONUT') {
    console.log(art);
    text = art;
    finds_data = loadBytes('/data/2CurvedTreats/6donut.bin');
  }
  //Module 3
  else if(art == 'STAR') {
    console.log(art);
    text = art;
    finds_data = loadBytes('/data/3SpaceAdventures/1star.bin');
  }
  else if(art == 'SUN') {
    console.log(art);
    text = art;
    finds_data = loadBytes('/data/3SpaceAdventures/2sun.bin');
  }
  else if(art == 'MOON') {
    console.log(art);
    text = art;
    finds_data = loadBytes('/data/3SpaceAdventures/3moon.bin');
  }
  else if(art == 'CLOUD') {
    console.log(art);
    text = art;
    finds_data = loadBytes('/data/3SpaceAdventures/4cloud.bin');
  }
  else if(art == 'RAINBOW') {
      console.log(art);
      text = art;
      finds_data = loadBytes('/data/3SpaceAdventures/5rainbow.bin');  
  }
  else if(art == 'RAIN') {
    console.log(art);
    text = art;
    finds_data = loadBytes('/data/3SpaceAdventures/6rain.bin');
  }
  //Module 4
  else if(art == 'HOUSE') {
    console.log(art);
    text = art;
    finds_data = loadBytes('/data/4HouseholdChattel/1house.bin');
  }
  else if(art == 'CEILING FAN') {
    console.log(art);
    text = art;
    finds_data = loadBytes('/data/4HouseholdChattel/2ceilingFan.bin');
  }
  else if(art == 'CANDLE') {
    console.log(art);
    text = art;
    finds_data = loadBytes('/data/4HouseholdChattel/3candle.bin');
  }
  else if(art == 'CUP') {
    console.log(art);
    text = art;
    finds_data = loadBytes('/data/4HouseholdChattel/4cup.bin');
  }
  else if(art == 'EYE GLASS') {
      console.log(art);
      text = art;
      finds_data = loadBytes('/data/4HouseholdChattel/5eyeglasses.bin');  
  }
  else if(art == 'COMPUTER') {
    console.log(art);
    text = art;
    finds_data = loadBytes('/data/4HouseholdChattel/6computer.bin');
  }
  //Module 5
  else if(art == 'BICYCLE') {
    console.log(art);
    text = art;
    finds_data = loadBytes('/data/5MovableThings/1bicycle.bin');
  }
  else if(art == 'TRAIN') {
    console.log(art);
    text = art;
    finds_data = loadBytes('/data/5MovableThings/2train.bin');
  }
  else if(art == 'HOT AIR BALLOON') {
    console.log(art);
    text = art;
    finds_data = loadBytes('/data/5MovableThings/3HotAirBalloon.bin');
  }
  else if(art == 'CAT') {
    console.log(art);
    text = art;
    finds_data = loadBytes('/data/5MovableThings/4cat.bin');
  }
  else if(art == 'FISH') {
      console.log(art);
      text = art;
      finds_data = loadBytes('/data/5MovableThings/5fish.bin');  
  }
  else if(art == 'ELEPHANT') {
    console.log(art);
    text = art;
    finds_data = loadBytes('/data/5MovableThings/6Elephant.bin');
  }
}

function setup() {
  let canvas = createCanvas(560,560);
  canvas.parent('sketch-holder');
  background(255);

  //toViewDatasets(lines_data);

  preparedData(finds, finds_data, FIND);
  preparedData(monalisa, monalisa_data, MONALISA);
  preparedData(bulldozer, bulldozer_data, BULLDOZER);
  
  nn = new NeuralNetwork(784, 64, 3);

  let training = [];
 
  training = training.concat(finds.training);
  training = training.concat(bulldozer.training);
  training = training.concat(monalisa.training);

  let testing = [];
  
  testing = testing.concat(finds.testing);
  testing = testing.concat(bulldozer.testing);
  testing = testing.concat(monalisa.testing);

  let epochCounter = 0;
  for(let i=1; i <= 2;i++) {
    trainEpoch(training);
    epochCounter++;
    console.log("Epoch: " + epochCounter);

    let percent = testAll(testing);
    console.log("Percent : " + nf(percent, 2, 2) + "%");
    if(percent > 94) {
      break;
    }
  }


  let guessButton = select('#guess');
  guessButton.mousePressed(function() {
    let inputs = [];
    let img = get();
    img.resize(28,28); 
    //console.log(img);
    img.loadPixels();
    for(let i = 0; i < len; i++) {
      let bright = img.pixels[i * 4];
      inputs[i] =  (255 - bright) / 255.0;
    }
    //console.log(inputs);

    let guess = nn.predict(inputs);
    let m = max(guess);
    console.log(guess);
    let classification = guess.indexOf(m);
    

    if(classification === FIND && m > 0.95 && m <= 0.9995) {

      //console.log("LINE");
      let voice = new p5.Speech();
      // voice.onLoad=Voices();
      // function Voices(){
      // voice.listVoices();                  
      //voice.setVoice('Google UK English Male');
      // }
      // voice.listVoices();
      // let name = 'Alice';
      // voice.setVoice(name);
      // function speechLoaded()
	    // {
        voice.speak('hurrah You have drawn the ' + text + ' ' + Number((m * 100).toFixed(1)) + '% correctly');
      // }
      VanillaToasts.create({
        // notification title
        title: 'Hurrah!!!',
        // notification message
        text: 'You have drawn the ' + text + ' ' + Number((m * 100).toFixed(1)) + '% correctly',
        // success, info, warning, error   / optional parameter
        type: 'success', 
        // path to notification icon
        icon: '/images/green-tick.png',
        // auto dismiss after 5000ms
        timeout: 4000 
        // executed when toast is clicked
        // callback: function() { ... } 
      });
    } 
    else {

      //console.log("Not a LINE");

      let voice = new p5.Speech();
      // let name = 'Alice';
      // voice.onLoad=Voices();
      // function Voices(){
      // voice.listVoices();                  
      //  voice.setVoice('Google UK English Male');
      // }
      // voice.setVoice(name);
      // function speechLoaded()
	    // {
        voice.speak('oops You have drawn the ' + text + ' wrongly');
      // }
      VanillaToasts.create({
        // notification title
        title: 'Oops!!!',
        // notification message
        text: 'You have drawn the ' + text + ' wrongly',
        // success, info, warning, error   / optional parameter
        type: 'error', 
        // path to notification icon
        icon: '/images/Wrong.png',
        // auto dismiss after 5000ms
        timeout: 4000 
        // executed when toast is clicked
        // callback: function() { ... } 
      });
    }

  })

  let clearButton = select('#clear');
  clearButton.mousePressed(function() {
    background(255);
  })

}

function draw() {
  strokeWeight(10);
  stroke(0);
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}


        