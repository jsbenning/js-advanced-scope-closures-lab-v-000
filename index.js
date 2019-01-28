function produceDrivingRange(blockRange){
  this.blockRange = blockRange;
  return function(start, end){ 
    if (Math.abs(start - end) > blockRange) {
      return false;
    } else {
      return true;
    }
  }
}