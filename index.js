function produceDrivingRange(blockRange){
  this.blockRange = blockRange;
  return function(start, end){
    let p1 = parseInt(start);
    let p2 = parseInt(end);
    if (Math.abs(p1 - p2) > blockRange) {
      return false;
    } else {
      return true;
    }
  }
}