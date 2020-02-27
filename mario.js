
printPyramid(5);


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
  let count = 0;
  let brick = "#";
  let base = "##";
  while(count < x){
    if(count == 0){
      console.log(base)
    }
    else if(count > 0){
      let newlayer = 0;
      while(newlayer < count){
        step = base.concat(brick);
        newlayer++;
      }
      console.log(step)
    }
    count++;
  }

    // TODO
    // print that pyramid!

}
