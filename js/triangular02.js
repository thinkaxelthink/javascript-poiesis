function triangular(n) {

  return n>0 ?  2*n-1 + triangular(n-2):0;

}
