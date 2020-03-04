printPyramid(7);
function printPyramid(height) {
  let x = height;
  let pyramid = ["##"];
  let brick ="#";
  
  while(pyramid.length < x){
    let current_layer = pyramid[pyramid.length - 1]
    let build = current_layer.concat(brick)
    pyramid.push(build);
  }
  
  for(i=0;i<pyramid.length;i++){
    let count = height - i - 1
    space = ""
    for (var z = 0; z < count; z++) {
      space += " ";
    }
    console.log(space + pyramid[i])
  }
}