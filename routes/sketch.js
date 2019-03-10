const len = 784;
const total_data = 1000;

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
let text = "Line";
let toastHeight = window.innerHeight / 12;

let nn;

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

  let trainButton = select('#train');
  let epochCounter = 0;
  trainButton.mousePressed(function() {
    trainEpoch(training);
    epochCounter++;
    console.log("Epoch: " + epochCounter);
  });


  let testButton = select('#test');
  testButton.mousePressed(function() {
    let percent = testAll(testing);
    console.log("Percent : " + nf(percent, 2, 2) + "%");
  });


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
    

    if(classification === FIND && m > 0.98 && m <= 0.9995) {

      //console.log("LINE");

      let voice = new p5.Speech();
      voice.speak('hurrah You have drawn the ' + text + ' ' + Number((m * 100).toFixed(1)) + '% correctly');

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

      let speech = new p5.Speech();
      speech.speak('oops You have drawn the ' + text + ' wrongly');

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
        