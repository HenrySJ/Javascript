
// 1 = 00000001
// 2 = 00000010
// 3 = 00000011

// Read, Write, Execute
// 00000100 only read permision
// 00000110 can read and write
// 00000111 can read, write and execute

// console.log(1 | 2); // Bitwise OR
// console.log(1 & 2); // Bitwise AND

const readPermision = 4;
const writePermission = 2;
const executePermission =1;
let myPermission = 0;
myPermission = myPermission | readPermision | writePermission;

let message = (myPermission & readPermision) ? 'yes': 'no'

console.log(message);

// Takeways!

// bitwise OR can be used to add permission, bitwise AND can be used to check if we have them