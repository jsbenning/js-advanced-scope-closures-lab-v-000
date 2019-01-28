function produceDrivingRange(blockRange){
  this.blockrange = blockrange;
  return function(start, end){ 
    if (Math.abs(start - end) > blockRange) {
      return false;
    } else {
      return true;
    }
  }
}