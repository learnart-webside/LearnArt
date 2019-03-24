function trainEpoch(training) {
  shuffle(training, true);
  //console.log(training);

// TRAIN FOR ONE EPOCH
  for (let i = 0; i < training.length;i++) {
  
    let data = training[i];
    let inputs = Array.from(data).map(x => x / 255);
    let label = training[i].label;
     // console.log(inputs);
     // console.log(label);
    let targets = [0,0,0];
    targets[label] = 1;
     //console.log(targets);
    nn.train(inputs, targets);
}
}




function testAll(testing) {
  //shuffle(testing, true);
  //console.log(training);

// TRAIN FOR ONE EPOCH
  let correct = 0;
for (let i = 0; i < testing.length;i++) {
//for(let i = 0; i < 1; i++) {
    
    let data = testing[i];
    let inputs = Array.from(data).map(x => x / 255);
    let label = testing[i].label;
    let guess = nn.predict(inputs);
    //console.log(guess);

    let m = max(guess);
    let classification = guess.indexOf(m);
    //console.log(classification);

    if(classification === label) {
      correct++;
    }
  }
  
  let percent = 100 * correct / testing.length;
  //console.log(label);
  //console.log("tested for one epoch");
  return percent;
}