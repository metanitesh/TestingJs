function expect(actual){
  return {
    toEqual: function(expected){
      if(actual !== expected){
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    }
  }   
}

function test (name, callback){
  try{
    callback();
    console.log(`${name} ... OK`);
  }catch(e){
    console.log(`${name} ... FAILED`);
    console.log('error', e);
  }
}

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

test('sum of two number', () => {
  expect(sum(1, 2)).toEqual(3);
})

test('subtract two number', () => {
  expect(subtract(5, 2)).toEqual(3);
})
