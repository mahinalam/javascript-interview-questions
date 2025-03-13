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

### 17. What kind of looping functions does JavaScript support?

JavaScript supports three types of looping functions:

* For loops
* While loops
* Do-while loops

### 18. What kind of conditional statements does JavaScript support?

These are the conditional statements supported by JavaScript:

* If
* If-else
* If-else if-else
* Switch


### 19. What is the HTML DOM?

Once a web page loads, browser generates something called a DOM, or Document Object Model, of the page. The DOM acts as a programming interface for HTML, which defines HTML properties, events, and methods. It also refers to HTML elements as objects.

JavaScript relies on this DOM to alter the elements and attributes of a page and create the dynamic websites it’s known for.
The Document Object Model is a platform- and language-neutral interface that will allow programs and scripts to dynamically access and update the content, structure, and style of documents.


### 20. How do timers work in JavaScript?

With a timer, coders can set their code to execute at specific times, either once or at repeat intervals. There are three functions involved to set a timer in JavaScript:

* setTimeout(function, milliseconds): This creates a timer that will call a function after a designated amount of milliseconds. This also generates an id value so the coder can access it at another time.

// Create a button that, upon clicking, executes the exampleTimer function.
<button onclick="exampleTimer()">Click here!</button>
// Define the exampleTimer function to create an alert box 2000 milliseconds after clicking.
<script>
function exampleTimer()
{
setTimeout(function(){alert("You did it!")},2000);
}
</script>


* setInterval(function, milliseconds): This acts the same way as the setTimer function, only it repeats itself based on the number of milliseconds given.

  // Create a button that, upon clicking, executes the example Interval function.
<button onclick="exampleInterval()">Click here!</button>
// The exampleInterval function will continue to create
// a new alert box 2000 milliseconds after one is closed.
<script>
function exampleInterval()
{
setInterval(function(){alert("You did it! Again!")},2000);
}
</script>

* clearInterval(id): Used to stop a timer.


### 21. How do you remove an attribute from a JavaScript object?

Using the delete method will remove an attribute from an object.

```js
var customer = { name: 'Tom Waits', age: 85}
delete customer.age
// customer will now be { name: 'Tom Waits' }
```


### 22. What type of pop-ups does JavaScript support?

There are three types:

* Alert
* Confirm
* Prompt

### 23. How can you force another page to load in JavaScript?

By setting the location.href value, as shown here:

location.href=”http://google.com”;


### 24. What are escape characters?

In JavaScript, the backslash is an escape character. Escape characters allow you to use a special character inside a set of the same special character that wraps it. For example, when you want to use a double quote inside another set of double quotes, like so:

var x = “Bob yelled \”Get out of here!\””;

Without the escape characters in the line above, there would be a syntax error. With them, console logging the variable above will result in this:

Bob yelled “Get out of here!”

### 25. What are JavaScript cookies?

Cookies are small data files stored by a browser. Websites set them to store information about you. An example would be the cookie set when you choose “Remember Me” when logging into a website. The site will store a cookie in your browser as a token to identify you without requiring you to log in again.

### 26. How do you add an element to an array in JavaScript?

var a = [1,2];
a.push(3);
// a now is [1,2,3];


### 27. How do you remove an element from a JavaScript Array?

There are two ways to do this, depending on whether you want to remove an element from the beginning or the end of the array. Pop removes an element from the end and shift removes an element from the beginning. Both methods return the element that they removed:

```js
var a = [1,2,3];
var ele1 = a.pop();
// a will now equal [1,2] and ele1 will equal 3.
var b = [1,2,3];
var ele2 = b.shift();
// b will now equal [2,3] and ele2 will equal 1.
```


### 28.  What is a callback?

A callback is a function that executes after another function has finished executing. It’s passed to the function as a parameter. Callbacks are necessary because JavaScript is an event-based language that can execute code asynchronously. Callback functions ensure that function calls occur in a specific order.


### 29. What are closures?
Closures form when you define a variable outside the current scope and access it from some inner scope. A simple way to use a closure is to define a JavaScript function inside of another JavaScript function.

### 30. What does a break statement do?
Break statements stop the execution of a loop in JavaScript.


### 31. What does a continue statement do?
Continue statements continue the next statement in a JavaScript loop.

### 32. How do you create a generic object in JavaScript?
You can create a new, empty JavaScript object using the object class.

var x = new object();

### 33. How do you find the type of a JavaScript object in code?

You do this using the typeof operator.

console.log(typeof 42);

// Will output “number”

### 34. How do you handle exceptions in JavaScript?

You can handle runtime exceptions by using the try, catch, and finally statements. Run the code you want to test in the try block, and if a runtime error occurs, it will execute the code designated in the catch block. The code in the finally block executes whether or not there is an error.

```js
Try{
    // Code you are executing
}
Catch(error){
    // Code to throw an exception
}
Finally{
    // Code that runs after either success or failure
}
```

### 35. What is the difference between Local storage and Session storage?

Local storage is stored locally in the browser without contacting the server with each change to the stored data. It persists between sessions unless it’s manually cleared. Session storage is like local storage, but it’s cleared when the browser is closed.

### 36. What are some JavaScript frontend frameworks and what to they do?

A JavaScript frontend framework is a set of JavaScript libraries that define a workflow and structure to a JavaScript web application. Here are some popular frontend frameworks:
* Angular
* React
* Vue


### 37. What is the difference between window and document in JavaScript?

The JavaScript window object is a global object that comprises variables, functions, history, location, and other attributes. The JavaScript document object is a property of the window object.

### 38. What is event bubbling?

Event bubbling transfers events contained within the child node to the parent node. It’s a beneficial method because of its speediness, as it only requires the code to traverse the DOM tree one time.

### 39. What is the difference between window.onload and onDocumentReady?

The window.onload event won’t trigger until every single element on the page has been fully loaded, including images and CSS. The downside to this is it might take a while before any code actually executes. You can use onDocumentReady to execute code as soon as the DOM is loaded instead.

### 40. What is the blur method used for?
The blur method removes focus from an element in HTML.

### 41. How do you convert any base of a number to an integer in JavaScript?
First, you must represent the number in the non-decimal as a string. Then use the parseInt method to convert it to an integer. The first parameter is your non-decimal number, and the second is the base of the number.

```js
// convert the hexadecimal value of FF
parseInt("FF", 16);
// returns 255
```

### 42. What are exports and imports?

Imports and exports allow developers to write modular JavaScript. Using these methods, a developer can break up a JavaScript project into multiple files.


### 43.  What are the different types of errors in JavaScript?
* EvalError
* RangeError
* ReferenceError
* SyntaxError
* TypeError
* URIError
* AggregateError
* InternalError


### 44. What is the difference between call and apply?
These methods work similarly. The call method will call a function with a given this value and separately-provided arguments:
theFunction.call(valueForThis, arg1, arg2, …)

The apply method does the same, but you must supply the arguments as an array:

theFunction.apply(valueForThis, arrayOfArgs)
The JavaScript errors are:


### 45. What is the unshift method?

var a = [2,3];
a.unshift(1);
// a will now be [1,2,3]


### 46. How do you assign properties to an object in JavaScript?
You can assign a property to a JavaScript object in two ways:

var a = {};
// using array syntax
a['firstName'] = 'John';
// the standard way
a.lastName = 'Doe';
// a will now be {firstName: "John", lastName: "Doe"}


### 47. What is strict mode in JavaScript and how can it you enable it?

Strict mode runs a restricted variety of JavaScript that limits the syntax you can use and turns some hidden errors into thrown errors. It can also provide more performance. You can enable it by adding the string literal “use strict” above the file:

“use strict”;

var a = ‘hi’;

### 48. How can you detect the operating system of the client machine with JavaScript?

Calling navigator.appVersion will return the operating system in JavaScript.


### 48. Explain Hoisting in javascript.

Hoisting is the default behaviour of javascript where all the variable and function declarations are moved on top.
This means that irrespective of where the variables and functions are declared, they are moved on top of the scope. The scope can be both local and global.

Example 1:

```js
hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
var hoistedVariable;
```

Example 2:

```js
hoistedFunction();  // Outputs " Hello world! " even when the function is declared after calling

function hoistedFunction(){ 
  console.log(" Hello world! ");
} 
```

Example 3:
```js
// Hoisting takes place in the local scope as well
function doSomething(){
  x = 33;
  console.log(x);
  var x;
} 
```

                         Note - Variable initializations are not hoisted, only variable declarations are hoisted:

```js
var x;
console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
x = 23;
```


                       Note - To avoid hoisting, you can run javascript in strict mode by using “use strict” on top of the code:
```js
"use strict";
x = 23; // Gives an error since 'x' is not declared
var x;
```

### 49. Why do we use the word “debugger” in javascript?

The debugger for the browser must be activated in order to debug the code. Built-in debuggers may be switched on and off, requiring the user to report faults. The remaining section of the code should stop execution before moving on to the next line while debugging.


### 50.  Difference between “ == “ and “ === “ operators.

Both are comparison operators. The difference between both the operators is that “==” is used to compare values whereas, “ === “ is used to compare both values and types.

Example

```js
var x = 2;
var y = "2";
(x == y)  // Returns true since the value of both x and y is the same
(x === y) // Returns false since the typeof x is "number" and typeof y is "string"

```

### 51. What is NaN property in JavaScript?

NaN property represents the “Not-a-Number” value. It indicates a value that is not a legal number.

typeof of NaN will return a Number.

To check if a value is NaN, we use the isNaN() function,

                                               Note- isNaN() function converts the given value to a Number type, and then equates to NaN.

```js
isNaN("Hello")  // Returns true
isNaN(345)   // Returns false
isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
isNaN(true) // Returns false, since true converted to Number type results in 1 ( a number)
isNaN(false) // Returns false
isNaN(undefined) // Returns true
```

### 52. What is an Immediately Invoked Function in JavaScript?

An Immediately Invoked Function ( known as IIFE and pronounced as IIFY) is a function that runs as soon as it is defined.

Syntax of IIFE :

```js
(function(){ 
  // Do something;
})();
```

To understand IIFE, we need to understand the two sets of parentheses that are added while creating an IIFE :

The first set of parenthesis:

```js
(function (){
   //Do something;
})
```

While executing javascript code, whenever the compiler sees the word “function”, it assumes that we are declaring a function in the code. Therefore, if we do not use the first set of parentheses, the compiler throws an error because it thinks we are declaring a function, and by the syntax of declaring a function, a function should always have a name.

```js
function() {
  //Do something;
}
// Compiler gives an error since the syntax of declaring a function is wrong in the code above.
```

To remove this error, we add the first set of parenthesis that tells the compiler that the function is not a function declaration, instead, it’s a function expression.

The second set of parenthesis:

(function (){
  //Do something;
})();

From the definition of an IIFE, we know that our code should run as soon as it is defined. A function runs only when it is invoked. If we do not invoke the function, the function declaration is returned:


### 53. Explain Higher Order Functions in javascript.

Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

Higher-order functions are a result of functions being first-class citizens in javascript.

Examples of higher-order functions:

```js
function higherOrder(fn) {
  fn();
}
   
higherOrder(function() { console.log("Hello world") });  
```

```js
function higherOrder2() {
  return function() {
    return "Do something";
  }
}      
var x = higherOrder2();
x()   // Returns "Do something"
```

### 54. Explain “this” keyword.

The “this” keyword refers to the object that the function is a property of.
The value of the “this” keyword will always depend on the object that is invoking the function.\
