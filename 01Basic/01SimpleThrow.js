function add (a, b){
  return a + b
}

const result = add(1, 2);
const expected = 5;

if(result !== expected){
  throw new Error(`Expected ${expected}, but got ${result}`);
}



