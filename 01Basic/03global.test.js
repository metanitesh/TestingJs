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

global.test = test;
global.expect = expect;