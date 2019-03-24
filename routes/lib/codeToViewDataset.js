function toViewDatasets(data) {
  let total = 1000;
  for(let n = 0; n < total; n++) {
    let img = createImage(28,28);
    img.loadPixels();
    let offset = n * 784;
    for(let i = 0; i < 784; i++) {
      let val = 255 - data.bytes[i + offset];
      img.pixels[i * 4 + 0] = val;
      img.pixels[i * 4 + 1] = val;
      img.pixels[i * 4 + 2] = val;
      img.pixels[i * 4 + 3] = 255;
    }
    img.updatePixels();
    let x = (n % 20) * 28;
    let y = floor(n / 20) * 28;
    image(img, x, y);
  }
}