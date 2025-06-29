/**
 * 8 ways to get Undefine
 * 1. variable that is not initialized will give udefine
 * 2. function with no return
 * 3. parameter that is not passed will be undefined
 * 4. if return has nothing on the right side will return undefined
 * 5. property that doesn't exists on an object will give you undefined
 * 6. accessing array elements outside of the id
 * 7. dleleting an element inside an array
 * 8. set a value directly to undefined
 */

let first;

function seceond(a, b) {
  const total = a + b;
}

const result = seceond();

function third(a, b, c, d) {
  const total = a + b + c + d;
  console.log(a, b, c, d);
}

// third(2, 5);

// console.log(result);

function noNegative(a,b){
    if(a<0 || b<0){
        return
    }
    return a + b;
}

const total = noNegative(2, -5)
// console.log(total);
const fifth = {id: 2, name: 'reyad', age: 40}
// console.log(fifth.age, fifth.salary);

const sixth = [4, 89, 87, 56, 54];
// you should not do it. Instead use splice
delete sixth[1];
// console.log(sixth[1], sixth[5], sixth[200]);
// console.log(sixth);

const eighth = undefined;

const ninth = null;

const data = {results: [], updated: null}

// console.log(typeof undefined);
console.log(typeof null);



