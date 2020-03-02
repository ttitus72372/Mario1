
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
  let x = height-1;
  let count = 0;
  let pyramid = ["##"];
  let brick ="#";
  
  while(pyramid.length < x){
    let current_layer = pyramid[pyramid.length - 1]
    let build = current_layer.concat(brick)
    pyramid.push(build);
  }
  //console.log(pyramid)
  for(i=0;i<pyramid.length;i++){
    console.log(pyramid[i])
  }
}