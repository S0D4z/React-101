let x = 42; // number
console.log(x);

let y = 'Hello'; // string
console.log(y);


// Boolean truthy and falsy
let z = true;
console.log(typeof z); // typeof z == 'boolean'
console.log(z);
console.log('========');

console.log(1 == 1);
console.log(1 == '1');
console.log(1 === '1');
console.log(0 == '0'); // true
console.log(0 == []); // true
console.log('0' == []); // false

console.log('========');
console.log(Boolean(true));
console.log(!!true);
console.log(!!{});
console.log(!![]);
console.log(!!new Date());
console.log(!!'0'); // true
console.log(!!42);
console.log(!!-42); // ?
console.log(!!Infinity);
console.log(!!-Infinity);
// !true = false, !false = true
// !isValid = isValid = true, false
// !isDisable = isDisable = false, true

console.log(!!false);
console.log(!!null);
console.log(!!undefined);
console.log(!!0);
console.log(!!-0);
console.log(!!NaN); // Not a number
console.log(!!'');

// 
let a = null
console.log(a);
console.log(typeof a);

let b
console.log(b);
console.log(typeof b);

let c = { name: 'Soda' }
console.log(c);
console.log(typeof c);

let d = [1, 2, 3, 4]
console.log(d);
console.log(typeof d);