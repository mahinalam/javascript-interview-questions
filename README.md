### 1. What are the different data types present in javascript?
Ans.To know the type of a JavaScript variable, we can use the typeof operator. <br>

**1. Primitive types** <br>

**String** - It represents a series of characters and is written with quotes. A string can be represented using a single or a double quote.

Example: <br>

```
var str = "Vivek Singh Bisht"; //using double quotes
var str2 = 'John Doe'; //using single quotes
```
**Number** - It represents a number and can be written with or without decimals.

Example: <br>

```
var x = 3; //without decimal
var y = 3.6; //with decimal
```

**BigInt** - This data type is used to store numbers which are above the limitation of the Number data type. It can store large integers and is represented by adding “n” to an integer literal.

Example: <br>

```
var bigInteger =  234567890123456789012345678901234567890;
```

**Boolean** - It represents a logical entity and can have only two values : true or false. Booleans are generally used for conditional testing.

Example: <br>

```
var a = 2;
var b =  3;
var c =  2;
(a == b) // returns false
(a == c) //returns true
```

**Undefined** - When a variable is declared but not assigned, it has the value of undefined and it’s type is also undefined.

Example: <br>

var x; // value of x is undefined
var y = undefined; // we can also set the value of a variable as undefined

**Null** - It represents a non-existent or a invalid value.

Example: <br>

var z = null;

**Symbol** - It is a new data type introduced in the ES6 version of javascript. It is used to store an anonymous and unique value.

Example: <br>

var symbol1 = Symbol('symbol');

* typeof of primitive types :
  ```js
  typeof "John Doe" // Returns "string"
  typeof 3.14 // Returns "number"
  typeof true // Returns "boolean"
  typeof 234567890123456789012345678901234567890n // Returns "bigint"
  typeof undefined // Returns "undefined"
  typeof null // Returns "object" (kind of a bug in JavaScript)
  typeof Symbol('symbol') // Returns "symbol"
  ```


**2. Non-primitive types**  

* Primitive data types can store only a single value. To store multiple and complex values, non-primitive data types are used.  
* **Object** - Used to store a collection of data.  

### Example:
```js
// Collection of data in key-value pairs
var obj1 = {
   x: 43,
   y: "Hello world!",
   z: function () {
      return this.x;
   }
};

// Collection of data as an ordered list
var array1 = [5, "Hello", true, 4.1];
```

### 2.What is JavaScript?
Javascript is a powerful, object-oriented, interpreted programming language that adds dynamic capabilities to HTML pages. All the popular web browsers use it as a scripting language. It also is used in the backend to create services in platforms like NodeJS.

### 3. How do you add JavaScript to a web page?

You can embed JavaScript directly into a web page using script tags, like the example below:

```js
<head>
<title>Your Page Title</title>
<script language="JavaScript" type="text/javascript">
[Your JavaScript code here]
</script>
</head>
```
You can also link in to the HTML file, like in this example:
```js
<head>
<title>Your Page Title</title>
<script type="text/javascript" src="YourJavaScriptFile.js"></script>
</head>
```

### 4. How do you add comments to JavaScript?

You can add either line comments or block comments to JavaScript.

// This is a line comment. It must stay on one line.

/* This is a

block comment. It can

span as many lines as you’d like.*/

### 5. Are there still local and global variables?

In modern JavaScript, the designations of global and local variables have become more exact. By definition, a global variable can be accessed from anywhere within the program and have “global scope” or global visibility within the program. Local variables are temporary variables that only have a scope within the function that generated them and have “local scope.”

// How to declare a local variable

In older versions of JavaScript, you declared a variable using the keyword “var”. In modern JavaScript, “var” has been replaced with the keyword “let”. Because of this, the distinction between global and local variables becomes more sharply defined. You declare a variable using “let”: 

let myFirstName = “John”;

If a variable is not within a function, an if block, or a loop, the variable is global in scope. 

### 6. Is JavaScript a case-sensitive language?

Yes, JavaScript is a case-sensitive language. When you name a variable, you must use the exact case to access that variable again. For that reason, like most case-sensitive languages, it is standard practice to use camelback notion where everything is in lowercase except mid-word capitalization. For example:

let   myFirstName = “Mary”;

### 7. What is the difference between Java and JavaScript?

Java is an object-oriented, compiled programming language designed to run in the Java Virtual Machine. JavaScript is an object-oriented, interpreted scripting language designed to run in the browser or JavaScript engines like NodeJS.

### 8. What is the difference between null and undefined in JavaScript?

A variable is undefined when you declare it without an assigned value, like below:

var x;

Null actually has to be assigned to a variable:

var x = null;

### 9.  What does this mean in JavaScript?

The this keyword in JavaScript references the object in which the function is operating.

### 10. How do you create an object in JavaScript?

In modern JavaScript, there are several ways to create an object. You can even use, like Java, the keyword “new”. However, in the background, JavaScript uses an object notation called JSON, which stands for JavaScript Object Notation. At its simplest. you can create an object in JavaScript by using JSON as follows:

```js
var customer = {
    name: "John Doe",
    age: 32
};
```

### 11.  How do you create an array in JavaScript?
```js
var emptyArray = [];
var populatedArray = ['a', 'b', 'c', 'd', 'e'];
```

### 12. How many types of functions are there in JavaScript?

There are two types. A function in JavaScript is a named function when it’s assigned a name on creation using the function keyword. A function is an anonymous function when it’s not given a name on creation.


### 13. What is the difference between var, const, and let?

“let” has become the way to declare a variable. The keyword “const” declares a variable whose value will not change. However, you might still come across applications that use “var” in legacy code. Here are the three possibilities, but, again, there are almost no reasons to use “var” any longer: 

* var – Variables defined with this keyword process before the execution of the JavaScript.
* let – You can reassign variables defined with this keyword. They also can only be used in the block they are defined in.
* const – You cannot reassign variables defined with this keyword. The keyword stands for constant

### 14. What is the difference between == and ===?

The double equal sign == checks for equality. The triple equal sign === checks for both equality and type.


### 15. What are the different boolean operators in JavaScript?

The difference is as follows: 
* && is the “and” operator
* || is the “or” operator
* ! is the “not” operator

### 16. What does the isNaN() function do?

The isNaN() function determines whether a value is not a number or an illegal number. If the argument is not a number, the isNaN() function will return true. A variable can also return NaN (Not a Number) if it needs to evaluate an expression that should return a number but fails to do so. 
