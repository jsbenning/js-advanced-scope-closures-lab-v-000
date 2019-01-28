function produceDrivingRange(blockRange){
  this.blockRange = blockRange;
  return function(start, end){
    let p1 = 
    if (Math.abs(start - end) > blockRange) {
      return false;
    } else {
      return true;
    }
  }
}