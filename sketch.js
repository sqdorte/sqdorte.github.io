
function setup() { 
  createCanvas(windowWidth, windowHeight);
  
  zoff = 0;
  // bg = color(random(100,200), random(100,200), random(100,200))
  bg = color(41, 45, 62)

  // sSlider = createSlider(2, 20, 3);
  // mSlider = createSlider(0, 200, 30);
  // nSlider = createSlider(10, 1000, 20);
  // zSlider = createSlider(0, 0.1, 0.009, 0.001);

  s = 7
  m = 30
  n = 30
  zstep = 0.009
  
  //y = height-30
  //x = width/4

  // sSlider.position(50,y);
  // mSlider.position(50+x,y);
  // nSlider.position(50+2*x,y);
  // zSlider.position(50+3*x,y);
  stroke(119, 103, 182)
}

function draw() {
  // const s = sSlider.value();
  // const m = mSlider.value();
  // const n = nSlider.value();
  // const zstep = zSlider.value();
  
  background(bg);
  
  for (var j = 50-m; j <= height-50; j+=s) {
    for (var i = 50; i <= width-50; i+=s) {
      var p = noise(i/n, j/n, zoff) * m
      var q = noise((i+s)/n, j/n, zoff) * m
      
      line(i, j+p, i+s, j+q);
    }
  }
  
  zoff += zstep
}
