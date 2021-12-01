function expect(actual){

  return {
    toEqual: function(expected){
      if(actual !== expected){
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    }
  }
   
}

expect(10).toEqual(20);