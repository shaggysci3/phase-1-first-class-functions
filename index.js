const { expect, spy } = require("chai");

function receivesAFunction(callback){
    return callback();
}

// Call the receivesAFunction function with the spy function
receivesAFunction(spy);

// Assert that the spy function was called
expect(spy).to.have.been.called;

function returnsANamedFunction(){
    // Define a named function
    function namedFunction(){
      return 1+1;
    }
  
    return namedFunction;
  }
  
  // Call the returnsANamedFunction function
  returnsANamedFunction();

function returnsAnAnonymousFunction(aFunction){
        return (function(){return 1+1});
}

returnsAnAnonymousFunction()