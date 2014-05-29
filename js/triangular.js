function triangular(n) {
  //return n>0 ?  2*n-1 + triangular(n-2):0;
  var a = [0];

  for (var i = 1; i <= n; i++) {

    if (!a[i]) {
      a[i] = a[i-1] + i;
    }
  }

  return a[i-1];
}
