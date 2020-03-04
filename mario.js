
printPyramid(7);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
  let x = height;
  let pyramid = ["##"];
  let brick ="#";
  
  
  while(pyramid.length < x){

    let current_layer = pyramid[pyramid.length - 1]
    let build = current_layer.concat(brick)
    pyramid.push(build);
  }
  //console.log(pyramid)
  for(i=0;i<pyramid.length;i++){
    let count = height - i - 1
    space = ""
    for (var z = 0; z < count; z++) {
      space += " ";
    }
    console.log(space + pyramid[i])
  }
}