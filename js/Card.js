exports.Card = function(name){
  this.name= name;
}




// Each round consists of 2 clicks
// On click 1:
  // Show card img
  // Grab value
// On click 2:
  // Show card img
  // Perform match method (compare values)
    // IF values match
      // Award 1 point
      // Leave cards face-up
      // Count as a "round"
    // ELSE (values do not match)
      // No points awarded
      // Cards flip back over
      // Count as a "round"
