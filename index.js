function produceDrivingRange(blockRange){
  
  return function(start, end){
    let p1 = parseInt(start);
    let p2 = parseInt(end);
    let dist = Math.abs(p1 - p2);
    if (dist > blockRange) {
      return ((dist - blockRange) + " blocks out of range");
    } else {
      return ("Within range by " + (blockRange - dist));
    }
  }
}