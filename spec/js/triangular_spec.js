/***********
 ** 
 **   A triangular number counts the objects that can form 
 **   an equilateral triangle, as in the diagram below:
 **
 **   1st (1)   2nd (3)    3rd (6)   4th (10) 
 **   *          **        ***       ****
 **              *         **        ***
 **                        *         **
 **                                  *
 **  
 **  source: [wikipedia](http://en.wikipedia.org/wiki/Triangular_number)
 **
 ***********/

describe('triangular()', function(){

  describe('when an integer is passed', function(){

    describe('and it is greater than zero (positive)', function(){

      beforeEach(function(){
        this.range    = [2,7,12,25,50,1000,5000,10000];
        this.results  = [3,28,78,325,1275,500500,12502500,50005000];
      });

      it('returns the the nth triangular number', function(){

        for (var i = 0; i < this.range.length; i++) {

          console.log('The value under the ' + this.range[i] + ' position is ' + this.results[i]);

          expect(triangular(this.range[i])).toEqual(this.results[i]);
        }
      });
    });

    describe('and it is zero', function(){

      it('returns 0', function(){

        expect(triangular(0)).toEqual(0);
      });
    });
    
    describe('and it is less than zero (negative)', function(){

      it('returns 0 for out of range values', function(){

        expect(triangular(-1)).toEqual(0);
        expect(triangular(-5)).toEqual(0);
      });
    });
  });
});
