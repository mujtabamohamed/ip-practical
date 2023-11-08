// length - Returns the length of a string.

const str = "Hello, World!";
const length = str.length; // length is 13


//charAt(index) - Returns the character at the specified index in a string

const str = "Hello";
const char = str.charAt(1); // char is "e"


//charCodeAt(index) - Returns the Unicode value of the character at the specified index.

const str = "Hello";
const charCode = str.charCodeAt(1); // charCode is 101


//substring(start, end) - Returns a portion of a string between the start and end indexes.

const str = "Hello, World!";
const substr = str.substring(0, 5); // substr is "Hello"


/*slice(start, end) - Returns a portion of a string between the start and end indexes.
It also supports negative indexes.*/

const str = "Hello, World!";
const sliced = str.slice(-6, -1); // sliced is "World"


//toUpperCase() - Converts a string to uppercase.

const str = "Hello";
const upperCaseStr = str.toUpperCase(); // upperCaseStr is "HELLO"


//toLowerCase() - Converts a string to lowercase.

const str = "WORLD";
const lowerCaseStr = str.toLowerCase(); // lowerCaseStr is "world"


//trim() - Removes whitespace from the beginning and end of a string.

const str = "  Hello, World!  ";
const trimmedStr = str.trim(); // trimmedStr is "Hello, World!"
