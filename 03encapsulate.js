function expect(actual){
  return {
    toEqual: function(expected){
      if(actual !== expected){
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    }
  }   
}

async function test (name, callback){
  try{
    await callback();
    console.log(`${name} ... OK`);
  }catch(e){
    console.log(`${name} ... FAILED`);
    console.log('error', e);
  }
}

const sum = async (a, b) => a + b;
const subtract = async (a, b) => a - b;

test('sum of two number', async() => {
  expect(await sum(1, 2)).toEqual(3);
})

test('subtract two number', async() => {
  expect(await subtract(4, 2)).toEqual(3);
})

